// @Flow
import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";
import { setItem, getItem } from "./utils/asyncStorage";
import { guid } from "./utils/uuid";

class BodyParts extends Component {
  state = {
    bodyPart: ""
  };

  addBodyParts = () =>
    setItem("bodyParts", {
      id: guid(),
      name: this.state.bodyPart
    });

  render() {
    const { bodyPart } = this.state;
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          value={bodyPart}
          onChangeText={text => this.setState({ bodyPart: text })}
        />
        <Button
          onPress={this.addBodyParts}
          title="Add body part"
          color="#841584"
          accessibilityLabel="Add body part"
        />
          {console.log({hmm: getItem('bodyParts')})}
          {/*{getItem('bodyParts').map(bodyPart => ( <Text>{bodyPart.name}</Text> ))}*/}
      </View>
    );
  }
}

export default BodyParts;
