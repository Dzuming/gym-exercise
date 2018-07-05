// @Flow
import React, { Component } from "react";
import { Button, TextInput, Text, FlatList } from "react-native";
import AppView from "../shared/AppView";
import { createBodyPart, getBodyParts } from "../utils/asyncStorage";

class BodyParts extends Component {
  static navigationOptions = {
    title: "Body parts"
  };

  state = {
    bodyPart: "",
    bodyParts: [],
    isLoading: false
  };

  addBodyParts = () => {
    this.showLoader(true);
    createBodyPart(this.state.bodyPart).then(async () => {
      this.setState({ bodyParts: await getBodyParts() });
      this.showLoader(false);
    });
  };

  async componentDidMount() {
    const bodyParts = await getBodyParts();
    if (Array.isArray(bodyParts)) {
      this.setState({ bodyParts });
    }
  }
  showLoader = state => this.setState({ isLoading: state });
  render() {
    const { bodyPart, bodyParts, isLoading } = this.state;
    return (
      <AppView headerTitle={"Body Parts"} isLoading={isLoading}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here body part!"
          value={bodyPart}
          onChangeText={text => this.setState({ bodyPart: text })}
        />
        <Button
          onPress={this.addBodyParts}
          title="Add body part"
          color="#841584"
          accessibilityLabel="Add body part"
        />
        <FlatList
          data={bodyParts}
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

export default BodyParts;
