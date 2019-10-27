import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import { useDispatch } from "react-redux";
import AuthActions from "../../redux/auth";
import styles from "./styles";

const image = require("../../assets/hungry.jpg");

export const Login = ({ navigation }) => {
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [registerMode, setRegisterMode] = useState(false);
  const dispatch = useDispatch();

  const tryToLogin = () =>
    dispatch(AuthActions.login(email, password, navigation));

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <TextInput
        style={styles.input}
        placeholder="Here goes your delightful email"
        onChangeText={setUser}
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Yummy password"
        onChangeText={setPassword}
        value={password}
      />
      {!registerMode ? (
        <>
          <TouchableOpacity onPress={tryToLogin} style={styles.btn}>
            <Text style={styles.btnText}> START EATING </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setRegisterMode(true)}
          >
            <Text style={styles.btnText}> BECOME PART OF US </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setRegisterMode(false)}
          >
            <Text style={styles.btnText}> REGISTER </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Login;
