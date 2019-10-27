import { Alert } from "react-native";
import { NavigationActions } from "react-navigation";

import firebaseInstance from "../../lib//firebase";

const initialState = {
  user: {}
};

export const types = {
  SET_USER: "SET_USER",
  SIGN_IN: "SIGN_IN"
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return state + action.payload;
    default:
      return state;
  }
}

const login = (email, password, navigation) => {
  return async (dispatch, getState) => {
    try {
      const firebaseResponse = await firebaseInstance.auth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch(setUser(firebaseResponse.user));
      navigation.navigate("Finder");
    } catch (err) {
      Alert.alert("SOMETHING WENT WRONG: ", err);
    }
  };
};

const setUser = user => ({
  type: types.SET_USER,
  payload: user
});

export default Actions = {
  login,
  setUser
};
