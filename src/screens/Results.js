import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppView from '../shared/AppView';
import {
  Picker,
  Dimensions,
  TextInput,
  View,
  Button,
  FlatList,
  Text,
  ToastAndroid
} from 'react-native';
import {
  addValueToExercise,
  getBodyParts,
  getExerciseResultByDate,
  getExercisesByBodyPart,
  getLatestExerciseResult,
  removeExerciseValue
} from '../utils/asyncStorage';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import { grey } from '../shared/colors';
import { validate } from '../utils/validate';

class Results extends Component {
  state = {
    bodyPart: '',
    exercise: '',
    exercisesByBodyPart: [],
    bodyParts: [],
    exerciseResultByDate: [],
    latestExerciseResult: [],
    date: '',
    weight: '',
    amount: '',
    isLoading: false
  };

  setBodyPart = value => this.setState({ bodyPart: value });
  setExercise = value => this.setState({ exercise: value });

  AddExerciseValue = async () => {
    const { exercise, date, amount, weight } = this.state;
    if (!validate({ exercise, date, amount, weight })) {
      ToastAndroid.show(I18n.t('validateResultError'), ToastAndroid.LONG);
      return;
    }
    this.showLoader(true);
    await addValueToExercise({
      id: exercise,
      date,
      amount,
      weight
    });
    await this.showLoader(false);
    await this.setExerciseResultByDate();
  };

  showLoader = state => this.setState({ isLoading: state });

  setExerciseByBodyPart = async () => {
    const exercisesByBodyPart = await getExercisesByBodyPart(
      this.state.bodyPart
    );
    if (Array.isArray(exercisesByBodyPart)) {
      this.setState({ exercisesByBodyPart });
      this.setState({ exercise: exercisesByBodyPart[0].id });
    }
  };

  setExerciseResultByDate = async () => {
    const exerciseResultByDate = await getExerciseResultByDate(
      this.state.exercise,
      this.state.date
    );
    if (Array.isArray(exerciseResultByDate)) {
      this.setState({ exerciseResultByDate });
    }
  };

  setLatestExerciseResult = async () => {
    const latestExerciseResult = await getLatestExerciseResult(
      this.state.exercise
    );
    if (Array.isArray(latestExerciseResult)) {
      this.setState({ latestExerciseResult });
    }
  };

  removeExerciseResult = async (exercise, itemId) => {
    await removeExerciseValue(exercise, itemId);
    await this.setExerciseResultByDate();
  };

  async componentDidMount() {
    const bodyParts = await getBodyParts();
    if (Array.isArray(bodyParts)) {
      this.setState({ bodyParts });
      this.setState({ bodyPart: bodyParts[0].id });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bodyPart !== this.state.bodyPart) {
      await this.setExerciseByBodyPart();
    }
    if (
      prevState.exercise !== this.state.exercise ||
      prevState.date !== this.state.date
    ) {
      await this.setLatestExerciseResult();
      await this.setExerciseResultByDate();
    }
  }

  render() {
    const {
      bodyParts,
      bodyPart,
      exercise,
      weight,
      amount,
      exercisesByBodyPart,
      exerciseResultByDate,
      latestExerciseResult,
      isLoading,
      date
    } = this.state;
    return (
      <AppView isLoading={isLoading}>
        <Picker selectedValue={bodyPart} onValueChange={this.setBodyPart}>
          {bodyParts.map(bodyPart => (
            <Picker.Item
              label={bodyPart.name}
              key={bodyPart.id}
              value={bodyPart.id}
            />
          ))}
        </Picker>
        <Picker selectedValue={exercise} onValueChange={this.setExercise}>
          {exercisesByBodyPart.map(exerciseByBodyPart => (
            <Picker.Item
              label={exerciseByBodyPart.name}
              key={exerciseByBodyPart.id}
              value={exerciseByBodyPart.id}
            />
          ))}
        </Picker>
        <DatePicker
          style={{ width: Dimensions.get('window').width - 40 }}
          date={date}
          mode="date"
          placeholder={I18n.t('selectDate')}
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            keyboardType="numeric"
            style={{
              height: 40,
              width: Dimensions.get('window').width / 2 - 20
            }}
            placeholder={I18n.t('typeWeight')}
            value={String(weight)}
            onChangeText={text => this.setState({ weight: text })}
          />
          <TextInput
            keyboardType="numeric"
            style={{
              height: 40,
              width: Dimensions.get('window').width / 2 - 20
            }}
            placeholder={I18n.t('typeAmount')}
            value={String(amount)}
            onChangeText={text => this.setState({ amount: text })}
          />
        </View>
        <Button
          onPress={this.AddExerciseValue}
          title={I18n.t('addResult')}
          color="#841584"
          accessibilityLabel={I18n.t('addResult')}
        />
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: 'black',
            padding: 5
          }}
        >
          <Text>{I18n.t('lastResult')}:</Text>
          <FlatList
            data={latestExerciseResult}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5
                }}
              >
                <Text>
                  {index + 1} {item.amount} {I18n.t('amount')} {item.weight} kg
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <FlatList
          data={exerciseResultByDate}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 5
              }}
            >
              <Text>
                {index + 1} {item.amount} {I18n.t('amount')} {item.weight} kg
              </Text>
              <Icon.Button
                name="trash-o"
                size={22}
                color="#900"
                backgroundColor={grey}
                onPress={() => this.removeExerciseResult(exercise, item.id)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </AppView>
    );
  }
}

Results.propTypes = {};

export default Results;
