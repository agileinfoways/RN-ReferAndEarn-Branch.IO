// /*import React, { Component } from 'react';
// import { Alert, Button, TextInput, View, StyleSheet, Dimensions, Text, TouchableOpacity, Animated } from 'react-native';


// export default class LoginDemo extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }
  
//   onLogin() {
//     const { username, password } = this.state;
//    if (this.state.password === "123456") {
//     Alert.alert('Credentials', `${username} + ${password}`);

//    }else {
//     Alert.alert('Credentials', `${username}`);
//    }
   
//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//           placeholder={'Username'}
//           style={styles.input}
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           placeholder={'Password'}
//           secureTextEntry={true}
//           style={styles.input}
//         />
//         <TouchableOpacity onPress={this.onLogin.bind(this)}>
//         <Text style={styles.ButtonStyle}>Login</Text>
//         </TouchableOpacity>
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'gray',
//   },
//   input: {
//     width: Dimensions.get('window').width - 60,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 10,
//     borderRadius: 11,
    
//   },
//   ButtonStyle: {
//     width: Dimensions.get('window').width - 60,
//     height: 50,
//     padding: 15,
//     borderRadius: 11,
//     backgroundColor: 'red',
//   //  justifyContent: 'center',
//     textAlign: 'center',
//   //  alignSelf: 'center'
    
//   },
// });*/



// // import React, { Component } from 'react';
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   TextInput,
// //   Button,
// //   TouchableHighlight,
// //   Image,
// //   Alert
// // } from 'react-native';

// // export default class LoginDemo extends Component {

// //   constructor(props) {
// //     super(props);
// //     state = {
// //       email   : '',
// //       password: '',
// //     }
// //   }

// //   onClickListener = (viewId) => {
// //     Alert.alert("Alert", "Button pressed "+viewId);
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <View style={styles.inputContainer}>
// //           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
// //           <TextInput style={styles.inputs}
// //               placeholder="Email"
// //               keyboardType="email-address"
// //               underlineColorAndroid='transparent'
// //               onChangeText={(email) => this.setState({email})}/>
// //         </View>
        
// //         <View style={styles.inputContainer}>
// //           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
// //           <TextInput style={styles.inputs}
// //               placeholder="Password"
// //               secureTextEntry={true}
// //               underlineColorAndroid='transparent'
// //               onChangeText={(password) => this.setState({password})}/>
// //         </View>

// //         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
// //           <Text style={styles.loginText}>Login</Text>
// //         </TouchableHighlight>

// //         <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
// //             <Text>Forgot your password?</Text>
// //         </TouchableHighlight>

// //         <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
// //             <Text>Register</Text>
// //         </TouchableHighlight>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#DCDCDC',
// //   },
// //   inputContainer: {
// //       borderBottomColor: '#F5FCFF',
// //       backgroundColor: '#FFFFFF',
// //       borderRadius:30,
// //       borderBottomWidth: 1,
// //       width:250,
// //       height:45,
// //       marginBottom:20,
// //       flexDirection: 'row',
// //       alignItems:'center'
// //   },
// //   inputs:{
// //       height:45,
// //       marginLeft:16,
// //       borderBottomColor: '#FFFFFF',
// //       flex:1,
// //   },
// //   inputIcon:{
// //     width:30,
// //     height:30,
// //     marginLeft:15,
// //     justifyContent: 'center'
// //   },
// //   buttonContainer: {
// //     height:45,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom:20,
// //     width:250,
// //     borderRadius:30,
// //   },
// //   loginButton: {
// //     backgroundColor: "#00b5ec",
// //   },
// //   loginText: {
// //     color: 'white',
// //   }
// // });


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableHighlight,
//   Image,
//   Alert
// } from 'react-native';

// import ScreenRecorderManager from 'react-native-screen-recorder'


// export default class LoginDemo extends React.Component {
//     start() {
//       ScreenRecorderManager.start()
//     }
//     stop() {
//       ScreenRecorderManager.stop()
//     }
//     render() {
//       return (
//         <View style={styles.container}>
//          <Button
//             onPress={this.start}
//             title="start"
//             color="#841584"
//             accessibilityLabel="Learn more about this purple button"
//           />
//           <Button
//             onPress={this.stop}
//             title="stop"
//             color="#841584"
//             accessibilityLabel="Learn more about this purple button"
//           />
//           <Text style={styles.welcome}>
//             Welcome to React Native!
//           </Text>
//           <Text style={styles.instructions}>
//             To get started, edit App.js
//           </Text>
//           <Text style={styles.instructions}>
//             {instructions}
//           </Text>
//         </View>
//       );
//     }
//   }


import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
  Platform,
  StyleSheet,
  Animated
} from 'react-native';


export default class LoginDemo extends Component {

  constructor(props) {
    super(props);
    this.state ={
      duration: 5000,
      side: 0,
      sides: [],
      progress: new Animated.Value(0),
      rotation: new Animated.ValueXY({x: 50, y: 50}),
      zoom: new Animated.Value(0),
      rotateOrientation: '',
      flipDirection: 'y'
    }
  }

  componentDidMount(){
    this.setState({
      duration: this.props.duration,
      flipZoom: this.props.flipZoom,
      sides: this.props.children
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      duration: nextProps.duration,
      flipZoom: nextProps.flipZoom,
      sides: nextProps.children
    });
  } 

  tip(customConfig){
    
    const defaultConfig = { direction: 'left', progress: 0.05, duration: 500 };
    const config = { ...defaultConfig, ...customConfig}
    const {direction, progress, duration } = config;
    const { rotation, side } = this.state;
    const sequence = [];

    if(direction === 'right'){
      sequence.push(Animated.timing(
        rotation,
        {
          toValue: {
            x: 0,
            y: (side === 0) ? 50 + progress*50 : 90,
          },
          duration,
          useNativeDriver: true,
        }
      ));
    }else{
      sequence.push(Animated.timing(
        rotation,
        {
          toValue: {
            x: 0,
            y: (side === 0) ? 50 - progress*50 : 90,
          },
          duration,
          useNativeDriver: true,
        }
      ));
    }

    sequence.push(Animated.timing(
      rotation,
      {
        toValue: {
          x: 0,
          y: (side === 0) ? 50 : 100,
        },
        duration,
        useNativeDriver: true,
      }
    ));
    Animated.sequence(sequence).start();
  }

  jiggle(customConfig = {}){
    const defaultConfig = { count: 3, duration: 200, progress: 0.05 };
    const config = { ...defaultConfig, ...customConfig}
    const { count, duration, progress } = config;
    const { rotation, side } = this.state;
    const sequence = [];
    for (let i = 0; i < count; i++){
      sequence.push(Animated.timing(
        rotation,
        {
          toValue: {
            x: 0,
            y: (side === 0) ? 50 + progress*50 : 90,
          },
          duration,
          useNativeDriver: true,
        }
      ));

      sequence.push(Animated.timing(
        rotation,
        {
          toValue: {
            x: 0,
            y: (side === 0) ? 50 - progress*50 : 110,
          },
          duration,
          useNativeDriver: true,
        }
      ));
    }
    sequence.push(Animated.timing(
      rotation,
      {
        toValue: {
          x: 0,
          y: (side === 0) ? 50 : 100,
        },
        duration,
        useNativeDriver: true,
      }
    ));
    Animated.sequence(sequence).start();
  }

  flip() {
    if(this.props.flipDirection == 'y'){
      this.flipY()
    }else{
      this.flipX()
    }
  }


  flipY() {
    const { side }  = this.state;
    this.setState({
      side: (side === 0) ? 1 : 0,
      rotateOrientation: 'y',
    });
    this._flipTo({
      x: 50,
      y: (side === 0) ? 100 : 50,
    });
  }

  flipX() {
    const { side }  = this.state;
    this.setState({
      side: (side === 0) ? 1 : 0,
      rotateOrientation: 'x',
    });

    this._flipTo({
      y: 50,
      x: (side === 0) ? 100 : 50,
    });
  }

  _flipTo(toValue){
    const { duration, rotation, progress, zoom, side } = this.state;
    this.props.onFlip((side === 0) ? 1 : 0);
    this.props.onFlipStart((side === 0) ? 1 : 0);
    Animated.parallel([
      Animated.timing(
        progress,
        {
          toValue: (side === 0) ? 100 : 0,
          duration,
          useNativeDriver: true,
        }
      ),
      Animated.sequence([
        Animated.timing(
          zoom,
          {
            toValue: 100,
            duration: duration,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          zoom,
          {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }
        )
      ]),
      Animated.timing(
        rotation,
        {
          toValue,
          duration: duration,
          useNativeDriver: true,
        }
      )
    ]).start(() => {
      this.props.onFlipEnd((side === 0) ? 1 : 0);
    });
  }

  getCardATransformation(){
    //0, 50, 100
    const { progress, rotation, side, rotateOrientation } = this.state;

    const sideAOpacity = progress.interpolate({
      inputRange: [50, 51],
      outputRange: [100, 0],
      extrapolate: 'clamp',
    });

    const sideATransform = {
      opacity: sideAOpacity,
      zIndex: (side === 0)? 1 : 0,
      transform: [
        { perspective: this.props.perspective },
      ]
    }
    if(rotateOrientation === 'x')
    {
      const aXRotation = rotation.x.interpolate({
        inputRange: [0, 50, 100, 150],
        outputRange: ['-180deg', '0deg','180deg','0deg'],
        extrapolate: 'clamp',
      });
      sideATransform.transform.push({ rotateX: aXRotation })
    }
    else
    {
      // cardA Y-rotation
      const aYRotation = rotation.y.interpolate({
        inputRange: [0, 50, 100, 150],
        outputRange: ['-180deg','0deg','180deg', '0deg'],
        extrapolate: 'clamp',
      });
      sideATransform.transform.push({ rotateY: aYRotation })
    }
    return sideATransform;

  }


  getCardBTransformation(){

    const { progress, rotation, side, rotateOrientation } = this.state;

    const sideBOpacity = progress.interpolate({
      inputRange: [50, 51],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const sideBTransform = {
      opacity: sideBOpacity,
      zIndex: (side === 0)? 0 : 1,
      transform: [
        { perspective: (-1 * this.props.perspective) },
      ]
    }

    if(rotateOrientation === 'x')
    {
      const bXRotation = rotation.x.interpolate({
        inputRange: [0, 50, 100, 150],
        outputRange: ['0deg','-180deg','-360deg', '180deg'],
        extrapolate: 'clamp',
      });
      sideBTransform.transform.push({ rotateX: bXRotation })
    }
    else
    {
      // cardB Y-rotation
      const bYRotation = rotation.y.interpolate({
        inputRange: [0, 50, 100, 150],
        outputRange: ['0deg', '180deg','0deg', '-180deg'],
        extrapolate: 'clamp',
      });
      sideBTransform.transform.push({ rotateY: bYRotation })
    }
    return sideBTransform;

  }

  render() {
    const { side, progress, rotateOrientation, zoom, sides } = this.state;
    const { flipZoom } = this.props

    // Handle cardA transformation
    const cardATransform = this.getCardATransformation()

    // Handle cardB transformation
    const cardBTransform = this.getCardBTransformation()

    // Handle cardPopup
    const cardZoom = zoom.interpolate({
      inputRange: [0,100],
      outputRange: [1, (1+flipZoom)],
      extrapolate: 'clamp',
    });

    const scaling = {
      transform: [
        { scale: cardZoom }
      ]
    }
    
    return (
      <Animated.View style={[this.props.style, scaling]}>
        <Animated.View style={[styles.cardContainer, cardATransform]}>{sides[0]}</Animated.View>
        <Animated.View style={[styles.cardContainer, cardBTransform]}>{sides[1]}</Animated.View>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    position:'absolute',
    left:0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

LoginDemo.defaultProps = {
  style: {},
  duration: 1500,
  flipZoom: 0.09,
  flipDirection: 'y',
  perspective: 800,
  onFlip: () => {},
  onFlipStart: () => {},
  onFlipEnd: () => {},
}

LoginDemo.propTypes = {
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  duration: PropTypes.number,
  flipZoom: PropTypes.number,
  flipDirection: PropTypes.string,
  onFlip: PropTypes.func,
  onFlipEnd: PropTypes.func,
  onFlipStart: PropTypes.func,
  perspective: PropTypes.number,
}