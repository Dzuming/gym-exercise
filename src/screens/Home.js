import React from "react";
import AppView from "../shared/AppView";
import { screens } from "../constants/screens";
import CustomButton from "../components/CustomButton";
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
            <CustomButton
              key={index}
              buttonStyle={{marginBottom: 10, padding: 10, alignItems: 'center', backgroundColor: 'blue'}}
              textStyle={{fontSize: 16, color: 'white'}}
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
