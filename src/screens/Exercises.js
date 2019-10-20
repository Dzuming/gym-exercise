import React, {Component} from 'react';
import {Button, FlatList, Picker, Text, TextInput} from 'react-native';
import AppView from '../shared/AppView';
import {
  createExercise,
  getBodyParts,
  getExercisesByBodyPart,
} from '../utils/asyncStorage';
import I18n from 'react-native-i18n';

class Exercises extends Component {
  state = {
    bodyParts: [],
    exercise: {
      bodyPart: '',
      name: '',
    },
    exercises: [],
    isLoading: false,
  };

  setExerciseValue = parameter => value => {
    let exercise = {...this.state.exercise};
    exercise[parameter] = value;
    this.setState({exercise});
  };

  addExercise = () => {
    const {exercise} = this.state;
    this.showLoader(true);
    createExercise(exercise).then(async () => {
      this.setState({
        exercises: await getExercisesByBodyPart(exercise.bodyPart),
      });
      this.showLoader(false);
    });
  };

  showLoader = state => this.setState({isLoading: state});

  async componentDidMount() {
    const bodyParts = await getBodyParts();

    if (Array.isArray(bodyParts)) {
      await this.setState({bodyParts});
      await this.setExerciseValue('bodyPart')(bodyParts[0].id);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const {exercise} = this.state;
    if (prevState.exercise.bodyPart !== exercise.bodyPart) {
      const exercises = await getExercisesByBodyPart(exercise.bodyPart);
      if (Array.isArray(exercises)) {
        this.setState({exercises});
      }
    }
  }

  render() {
    const {bodyParts, exercise, exercises, isLoading} = this.state;
    return (
      <AppView headerTitle={'Exercises'} isLoading={isLoading}>
        <Text>{I18n.t('bodyPart')}</Text>
        <Picker
          selectedValue={exercise.bodyPart}
          onValueChange={this.setExerciseValue('bodyPart')}>
          {bodyParts.map(bodyPart => (
            <Picker.Item
              label={bodyPart.name}
              key={bodyPart.id}
              value={bodyPart.id}
            />
          ))}
        </Picker>
        <TextInput
          style={{height: 40}}
          placeholder={I18n.t('typeExercise')}
          value={exercise.name}
          onChangeText={this.setExerciseValue('name')}
        />
        <Button
          onPress={this.addExercise}
          title={I18n.t('addExercise')}
          color="#841584"
          accessibilityLabel="Add body part"
        />
        <FlatList
          data={exercises}
          renderItem={({item, index}) => (
            <Text>
              {index + 1} {item.name}
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      </AppView>
    );
  }
}

export default Exercises;
