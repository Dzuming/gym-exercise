import React from "react";
import { Button } from "react-native";
import AppView from "../shared/AppView";
import { screens } from "../constants/screens";
class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <AppView
        headerTitle={"Home"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {screens.map((screen, index) => {
          if (screen.name === "Home") {
            return;
          }
          return (
            <Button
              key={index}
              title={screen.title}
              onPress={() => this.props.navigation.navigate(screen.name)}
            />
          );
        })}
      </AppView>
    );
  }
}

export default Home;
