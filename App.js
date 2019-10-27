import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import Screens from "./navigation";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store} r>
      <Screens />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
