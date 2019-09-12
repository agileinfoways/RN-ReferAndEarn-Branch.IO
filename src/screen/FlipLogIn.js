

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
  AsyncStorage
} from 'react-native'
import * as keys from "../constants/keys";
import branch from "react-native-branch";
import LoginDemo from "./LoginDemo";

export default class FlipLogIn extends Component {

  static navigationOptions = { title: "Login OR SignUp", headerStyle: {
    backgroundColor: '#FE474C',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  },}

  constructor(props) {
    super(props);

   
    this.state = {
      username: "",
      password: "",
      email: "",
      mobile: "",
      color: "#FE474C",
      InviteCode: "",
      title: "LogIn"
    };


  }
  componentWillMount() {
    AsyncStorage.getItem(keys.SET_REFERRAL_TOKEN)
    .then(value => {
      console.log("Global_Referral_Token" + value);
  
      this.setState({
        InviteCode: value !== null ? value : ""
      });
    })
    .done();
  }
  onLogin() {
    const { username, password } = this.state;
if (username!=="Pawan" && password!== "123456") {

  //Alert.alert("Incorrect password")
   this.card.jiggle()

}else {

  this.props.navigation.navigate('Refer');
  // this.card.flip()
  this.setState={
    password: "",
    username:""
  }

} 
  }

  onRegister() {
    const { email, password, mobile } = this.state;

    if (email=== "" && mobile === "" && password === "") {

      this.card.jiggle()
    
    }else {
      this.card.flip()
      this.setState={
        password: "",
        username:"",
        mobile: "",
        email: "",
      }
    
  }
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
    Alert.alert("You Invited by " + params["$canonical_identifier"] + " & you will receive 1000$");

    AsyncStorage.setItem(
      keys.SET_REFERRAL_TOKEN,
      params["$canonical_identifier"]
    );
  } else {
    
  }
})
    return (
      <View style={styles.container}>
        <LoginDemo
          style={styles.cardContainer}
          ref={card => (this.card = card)}
        >
          <View style={styles.card1}>
            <TextInput
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              placeholder={"Username"}
              style={styles.textInput}
            />

            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.textInput}
            />
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.lebel, styles.card1]}
              onPress={() => this.onLogin()}
            >
              <Text style={styles.label}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.lebel, styles.card1]}
              onPress={() => this.card.flip()}
            >
              <Text style={styles.label2}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card2}>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder={"Email"}
              style={styles.textInput}
            />
            <TextInput
              value={this.state.mobile}
              onChangeText={mobile => this.setState({ mobile })}
              placeholder={"Mobile Number"}
              style={styles.textInput}
            />

            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.textInput}
            />
           
            <TextInput
              value={this.state.InviteCode}
             // onChangeText={InviteCode => this.setState({ InviteCode })}
              editable= {false}
              //placeholder={"InviteCode"}
             // secureTextEntry={true}
              style={styles.textInput}
              
            />
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card2]}
              onPress={() => 
              
              this.onRegister()}
            >
              <Text style={styles.label}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.label2, styles.card2]}
              onPress={() => this.card.flip()}
            >
              <Text style={styles.label2}>Already have a account</Text>
            </TouchableOpacity>
          </View>
        </LoginDemo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  
 cardContainer: {
   marginTop:100,
   width: 320,
   height: 470,
   borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },

  card1: {

    // justifyContent: "center",
     alignItems: "center",
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card2: {
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEB12C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  label: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
    paddingBottom: 10,
    margin: 5,
  },
  label2: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "System",
    color: "black",
    backgroundColor: "transparent",
    paddingBottom: 10,
    margin: 5,
  },
  textInput: {
    width: 250,
    height: 45,
    borderRadius: 11,
    backgroundColor: "white",
    margin:7,
    marginTop: 10,
    padding: 8,
  },
 
 
});
