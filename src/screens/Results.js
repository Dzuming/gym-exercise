import React, { Component } from "react";
import PropTypes from "prop-types";
import AppView from "../shared/AppView";
import {
  Picker,
  Dimensions,
  TextInput,
  View,
  Button,
  FlatList,
  Text
} from "react-native";
import {
  addValueToExercise,
  getBodyParts,
  getExerciseResultByDate,
  getExercisesByBodyPart
} from "../utils/asyncStorage";
import DatePicker from "react-native-datepicker";

class Results extends Component {
  static navigationOptions = {
    title: "Add result"
  };

  state = {
    bodyPart: "",
    exercise: "",
    exercisesByBodyPart: [],
    bodyParts: [],
    exerciseResultByDate: [],
    date: "",
    weight: "",
    amount: 0,
    isLoading: false
  };

  setBodyPart = value => this.setState({ bodyPart: value });
  setExercise = value => this.setState({ exercise: value });

  async componentDidMount() {
    const bodyParts = await getBodyParts();
    if (Array.isArray(bodyParts)) {
      this.setState({ bodyParts });
      this.setState({ bodyPart: bodyParts[0].id });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bodyPart !== this.state.bodyPart) {
      const exercisesByBodyPart = await getExercisesByBodyPart(
        this.state.bodyPart
      );
      if (Array.isArray(exercisesByBodyPart)) {
        this.setState({ exercisesByBodyPart });
        this.setState({ exercise: exercisesByBodyPart[0].id });
      }
    }
    if (
      prevState.exercise !== this.state.exercise ||
      prevState.date !== this.state.date
    ) {
      const exerciseResultByDate = await getExerciseResultByDate(
        this.state.exercise,
        this.state.date
      );
      if (Array.isArray(exerciseResultByDate)) {
        this.setState({ exerciseResultByDate });
      }
    }
  }

  AddExerciseValue = async () => {
    const { exercise, date, amount, weight } = this.state;
    this.showLoader(true);
    await addValueToExercise({
      id: exercise,
      date,
      amount,
      weight
    });
    await this.showLoader(false);
    const exerciseResultByDate = await getExerciseResultByDate(
      this.state.exercise,
      this.state.date
    );
    if (Array.isArray(exerciseResultByDate)) {
      this.setState({ exerciseResultByDate });
    }
  };

  showLoader = state => this.setState({ isLoading: state });

  render() {
    const {
      bodyParts,
      bodyPart,
      exercise,
      weight,
      amount,
      exercisesByBodyPart,
      exerciseResultByDate,
      isLoading
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
          style={{ width: Dimensions.get("window").width - 40 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
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
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              height: 40,
              width: Dimensions.get("window").width / 2 - 20
            }}
            placeholder="Type here weight!"
            value={weight}
            onChangeText={text => this.setState({ weight: text })}
          />
          <TextInput
            style={{
              height: 40,
              width: Dimensions.get("window").width / 2 - 20
            }}
            placeholder="Type here amount!"
            value={amount}
            onChangeText={text => this.setState({ amount: text })}
          />
        </View>
        <Button
          onPress={this.AddExerciseValue}
          title="Add exercise value"
          color="#841584"
          accessibilityLabel="Add exercise value"
        />
        <FlatList
          data={exerciseResultByDate}
          renderItem={({ item, index }) => (
            <Text>
              {index + 1} {item.amount} {item.weight}kg
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      </AppView>
    );
  }
}

Results.propTypes = {};

export default Results;
