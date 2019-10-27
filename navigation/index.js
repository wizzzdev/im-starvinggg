import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../screens/Login";
import Finder from "../screens/Finder";
import History from "../screens/History";

const Navigation = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Finder: {
      screen: Finder
    },
    History: {
      screen: History
    }
  },
  { initialRouteName: "Login" }
);

export default createAppContainer(Navigation);
