// @Flow
import React, { Component } from "react";
import { Button, View, TextInput, Text, FlatList } from "react-native";
import store from "react-native-simple-store";
import { guid } from "./utils/uuid";
import { clearAsyncStorage, printAsyncStorage } from "./utils/asyncStorage";

class BodyParts extends Component {
  state = {
    bodyPart: "",
    bodyParts: []
  };

  addBodyParts = () => {
    store
      .push("bodyParts", {
        id: guid(),
        name: this.state.bodyPart
      })
      .then(async () =>
        this.setState({ bodyParts: await store.get("bodyParts") })
      );
  };

  async componentDidMount() {
    if (Array.isArray(await store.get("bodyParts"))) {
      this.setState({ bodyParts: await store.get("bodyParts") });
    }
  }

  render() {
    const { bodyPart, bodyParts } = this.state;
    return (
      <View>
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
      </View>
    );
  }
}

export default BodyParts;
