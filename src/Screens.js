import { createStackNavigator } from "react-navigation";
import { screens } from "./constants/screens";

const screensObject = Object.assign(
  {},
    ...screens.map(screen => (
    {[screen.name]: screen.component}
))
);

const Screens = createStackNavigator(screensObject, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
});

export default Screens;
