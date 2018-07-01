// @Flow
import React, { Component } from "react";
import { Button, View, TextInput, Text, FlatList } from "react-native";
import store from "react-native-simple-store";
import { guid } from "./utils/uuid";
import { clearAsyncStorage, printAsyncStorage } from "./utils/asyncStorage";
import AppView from "./shared/AppView";

class BodyParts extends Component {
  state = {
    bodyPart: "",
    bodyParts: [],
    isLoading: false
  };

  addBodyParts = () => {
    this.showLoader(true);
    store
      .push("bodyParts", {
        id: guid(),
        name: this.state.bodyPart
      })
      .then(async () => {
        this.setState({ bodyParts: await store.get("bodyParts") });
        this.showLoader(false);
      });
  };

  async componentDidMount() {
    if (Array.isArray(await store.get("bodyParts"))) {
      this.setState({ bodyParts: await store.get("bodyParts") });
    }
  }
  showLoader = state => this.setState({ isLoading: state });
  render() {
    const { bodyPart, bodyParts, isLoading } = this.state;
    return (
      <AppView isLoading={isLoading}>
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
