import React, { Component } from "react";
import { Button, FlatList, Picker, Text, TextInput } from "react-native";
import AppView from "../shared/AppView";
import {
  createExercise,
  getBodyParts,
  getExercises
} from "../utils/asyncStorage";

class Exercises extends Component {
  static navigationOptions = {
    title: "Exercises"
  };

  state = {
    bodyParts: [],
    exercise: {
      bodyPart: "",
      name: ""
    },
    exercises: [],
    isLoading: false
  };

  async componentDidMount() {
    const bodyParts = await getBodyParts();
    const exercises = await getExercises();
    if (Array.isArray(bodyParts)) {
      this.setState({ bodyParts });
    }

    if (Array.isArray(exercises)) {
      this.setState({ exercises });
    }
  }
  setExerciseValue = parameter => value => {
    let exercise = { ...this.state.exercise };
    exercise[parameter] = value;
    this.setState({ exercise });
  };

  addExercise = () => {
    this.showLoader(true);
    createExercise(this.state.exercise).then(async () => {
      this.setState({ exercises: await getExercises() });
      this.showLoader(false);
    });
  };

  showLoader = state => this.setState({ isLoading: state });

  render() {
    const { bodyParts, exercise, exercises, isLoading } = this.state;

    return (
      <AppView isLoading={isLoading}>
        <Text>Body part</Text>
        <Picker
          selectedValue={exercise.bodyPart}
          onValueChange={this.setExerciseValue("bodyPart")}
        >
          {bodyParts.map(bodyPart => (
            <Picker.Item
              label={bodyPart.name}
              key={bodyPart.id}
              value={bodyPart.id}
            />
          ))}
        </Picker>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here exercise part!"
          value={exercise.name}
          onChangeText={this.setExerciseValue("name")}
        />
        <Button
          onPress={this.addExercise}
          title="Add exercise"
          color="#841584"
          accessibilityLabel="Add body part"
        />
        <FlatList
          data={exercises}
          renderItem={({ item, index }) => (
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
