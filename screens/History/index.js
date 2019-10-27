import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export const Login = () => {
  const history = useSelector(({ finder }) => finder.history);
  console.log("THIS IS THE HISTORY::: ", history);
  return (
    <View>
      {history.length ? (
        history.map(transaction => (
          <View style={{ borderBottomWidth: 1 }}>
            <Text>
              {String(transaction.date)} - {transaction.location}{" "}
            </Text>
            {transaction.places.map(place => (
              <Text>{place.name}</Text>
            ))}
          </View>
        ))
      ) : (
        <Text>No results</Text>
      )}
    </View>
  );
};

export default Login;
