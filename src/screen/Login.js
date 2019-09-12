import React, {Component} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet, 
  AsyncStorage
} from 'react-native';
import branch from "react-native-branch";
import * as keys from "../constants/keys";
import SignUp from './SignUp';

export default class Login extends React.Component {
  constructor(props){
    super(props)
    state = {
      username: '', password: ''
    }
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  
  loginClick() {
    // const { username, password} = this.state
    // try {
    //   // here place your signup logic
    //   console.log('user successfully signed up!: ', success)
    //   this.navigation.navigate("SignUp")
    // } catch (err) {
    //   console.log('error signing up: ', err)
    // }
    this.props.navigation.navigate(SignUp);
  };

  signUpClick() {
    this.props.navigation.navigate(SignUp);
  }

  render() {
        // MARK:- Branch.io code
branch.subscribe(({ error, params }) => {
    if (error) {
      //     alert(error)
      return;
    }
    console.log("in to subscribe ==> " + JSON.stringify(params));
    console.log(
      "in to params condition ==> " +
        JSON.stringify(params["$canonical_identifier"])
    );
  
    if (params) {
      console.log("in to params condition ==> " + JSON.stringify(params));
    }
  
    if (params["$canonical_identifier"]) {
      // let data = JSON.stringify(params['+canonical_identifier'])
      // alert("Code====canonical_identifier===>",data)
      //   this.setState({
      //         inviteCode: data
      //       });
  
      let data = JSON.stringify(params);
      // alert("Code====All Data===>",data.canonical_identifier)
      // if (data.$canonical_identifier !==null) {
      console.log("Code====data.conical===>" + data);
      console.log("Code====data.conical===>" + params["$canonical_identifier"]);
      AsyncStorage.setItem(
        keys.SET_REFERRAL_TOKEN,
        params["$canonical_identifier"]
      );
    } else {
      
    }
  })
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('password', val)}
        />
       
        <Button style={styles.button}
          title='Log in'
          onPress={this.loginClick}
        />
         <Button style={styles.button}
          title='Register'
          onPress={this.loginClick}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 11,
    fontSize: 16,
  
    //fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: 'blue',
    margin: 15,
    padding: 8,
    color: 'white',
    borderRadius: 11,
    fontSize: 16,
    marginBottom: 20
   
  }
})