import React, {Component} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet, 
  AsyncStorage
} from 'react-native'
import * as keys from "../constants/keys";

export default class SignUp extends React.Component {
constructor(props){
  super(props)
  state = {
    username: '', password: '', email: '', phone_number: '', inviteCode: ''
  }
}

 
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  // signUp = async () => {
  //   const { username, password, email, phone_number, inviteCode } = this.state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }

  signUpClick() {
    this.props.navigation.navigate(SignUp);
  }

  componentWillMount() {
    AsyncStorage.getItem(keys.SET_REFERRAL_TOKEN)
    .then(value => {
      console.log("Global_Referral_Token" + value);
  
      this.setState({
        inviteCode: value !== null ? value : ""
      });
    })
    .done();
  }
  render() {
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
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='InviteCode'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('InviteCode', val)}
        />
        <Button style={styles.button}
          title='Register'
          onPress={this.signUpClick}
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
   
  }
})