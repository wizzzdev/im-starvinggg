import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import FinderActions from "../../redux/finder";
import styles from "./styles";

const image = require("../../assets/hungry.jpg");

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [displayResults, setDisplayResults] = useState(false);
  const results = useSelector(({ finder }) => finder.results);

  const findRestaurants = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({});
      dispatch(
        FinderActions.findPlaces(
          location.coords.latitude,
          location.coords.longitude
        )
      );
      setDisplayResults(true);
    }
  };

  const renderResults = () => (
    <View>
      {results.length ? (
        results.map(result => (
          <View>
            <Text>{`${result.name} - ${result.address}`}</Text>
          </View>
        ))
      ) : (
        <Text> No results </Text>
      )}
    </View>
  );

  const goToHistory = () => navigation.navigate("History");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={findRestaurants}>
        <Text style={styles.btnText}>
          FIND RESTAURANTS CLOSE TO THIS LOCATION
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={goToHistory}>
        <Text style={styles.btnText}>HISTORY</Text>
      </TouchableOpacity>
      {renderResults()}
    </View>
  );
};

export default Login;
