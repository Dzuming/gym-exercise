import BodyParts from "./screens/BodyParts";
import Home from "./screens/Home";
import { createStackNavigator } from "react-navigation";

const Screens = createStackNavigator(
  {
    Home: Home,
    BodyParts: BodyParts
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }
  }
);

export default Screens;
