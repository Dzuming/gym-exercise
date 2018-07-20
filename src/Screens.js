import { createStackNavigator } from "react-navigation";
import { screens } from "./constants/screens";
import I18n from "react-native-i18n";
import {toLowerCaseFirstLetter} from "./utils/string";

const screensObject = Object.assign(
  {},
  ...screens.map(screen => ({ [screen.name]: screen.component }))
);

const Screens = createStackNavigator(screensObject, {
  navigationOptions: ({ navigation }) => ({
    title: I18n.t(
      `routeTitle.${toLowerCaseFirstLetter(navigation.state.routeName)}`
    ),
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  })
});

export default Screens;
