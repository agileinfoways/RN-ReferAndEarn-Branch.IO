import React, {Component} from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, AsyncStorage, Share, Dimensions, StyleSheet, Button } from "react-native";
import branch from 'react-native-branch';
import QRCode from "react-native-qrcode-svg";

//import { moderateScale, scale } from "react-native-size-matters";
class ReferAndEarn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inviteCode: "Pawan",
            urlCode: "Pawan",

           // referCode: "Pawan"
       
          };
        this.generateInviteLink();
    }
    async generateInviteLink() {
        let branchUniversalObject = await branch.createBranchUniversalObject(
          this.state.inviteCode !== null
            ? this.state.inviteCode
            : "",
          {
            locallyIndex: true,
            title: "Refer&EarnDemo",
            contentDescription:
              "Invite your friends through this app and earn money.",
            contentImageUrl: "https://api.gogotaxiapps.com/uploads/logo/gogo_logo_link.JPG"
            // contentMetadata: {
            // // ratingAverage: 4.2,
            // // customMetadata: {
            // // prop1: "",
            // // prop2: ""
            // // }
            // }
          }
        );
        let linkProperties = {
          feature: "share",
          channel: "facebook"
        };
    
        let controlParams = {
          $desktop_url: ""
        };
    
        if (branchUniversalObject) {
          branchUniversalObject
            .generateShortUrl(linkProperties, controlParams)
            .then(
              success => {
                var link_url = success.url
                if (link_url && link_url.includes("/")){
                var array = link_url.split("/");
                console.log(array[array.length-1])
                }
     console.log("inviteCode"  + success.url)
                this.setState({
                  inviteCode: success.url,
                  urlCode: array[array.length-1]
                });
              },
              error => {
                 console.log("error ==>"+JSON.stringify(error))
              }
            );
        } else {
           console.log("waiting =============>" + JSON.stringify(e))
        }
      }
      onShareButtonClick() {
        Share.share(
          {
            message: "Use gogo driver application \n \n" + this.state.inviteCode,
            url: this.state.inviteCode,
            title: "Refer & Earn Demo App"
          },
          {
            // Android only:
            dialogTitle: "Share",
            // iOS only:
            excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"]
          }
        );
      }
      render() {
        let base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..";
          return (
            <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
              flexDirection: "column"
            }}
            style={{ backgroundColor: "white" }}
          >
            <View style={styles.container}>
              <Image
                style={styles.imageStyle}
                source={{ uri: "invite_earn_graphics" }}
              />
              {/* <View style={styles.cardView}>
                <View style={styles.walletContainer}>
                  <Text style={styles.inviteCodeFromText}>
                    {"Invite & Earn"}
                  </Text>
                  <Text style={styles.inviteCodeText}>
                    {this.state.inviteCode !== null
                      ? this.state.urlCode
                      : ""}
                  </Text>
                </View>
              </View> */}
           
              <View style={styles.cardView}>
                <View style={styles.walletContainer}>
                  <Text style={styles.inviteCodeFromText}>
                    {"Invite & Earn"}
                  </Text>
                  <Text style={styles.inviteCodeText}>
                    {this.state.inviteCode !== null
                      ? this.state.urlCode
                      : ""}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.onShareButtonClick()}>
              <Text style={styles.buttonStyle}>SHARE</Text>
              </TouchableOpacity>
              
              {/* <Text
                style={styles.buttonStyle}
                
                // onButtonClick={() => {
                //   this.props.navigation.navigate("ContactList", {
                //     sharedLink: this.state.inviteCode
                //   });
                // }}
              >SMS</Text> */}
              <View style={styles.imageQRStyle}>
                <QRCode
                  value={this.state.inviteCode}
                  logo={{ uri: base64Logo }}
                  logoSize={30}
                  logoBackgroundColor="transparent"
                />
              </View>
              <Text style={styles.textFooter}>
                {"SCANE QR CODE"}
              </Text>
            </View>
          </ScrollView>
          );
          }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: 'white',
        paddingBottom: 25,
        //paddingRight: 10,
        marginRight: 20,
        
      },
      inviteCodeText: {
       // paddingLeft: 10,
        backgroundColor: 'white',
        alignSelf: "center",
        color: "#FE474C",
        fontSize: 20,
        justifyContent: 'center',
       // alignItems: 'center'

      //  fontFamily: fonts.FONT_GOOGLE_SANS_REGULAR
      },
      inviteCodeFromText: {
        width: "100%",
        paddingLeft: 10,   
        backgroundColor: 'white',
        color: 'black',
        paddingBottom: 10,
        paddingTop: 10,
        alignSelf: 'flex-start',
     // textAlign: '',
        fontSize: 14.5,
     // fontFamily: fonts.FONT_GOOGLE_SANS_REGULAR
      },
    
    
      walletContainer:{
    
          width: "100%",
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 10,
          marginRight: 10,
          backgroundColor: "white",
      },
    
      ReferralTextContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
      },
      textFooter:{
        width: "100%",
        fontSize: 14,
        backgroundColor: 'white',
        color: "#FE474C",
        alignSelf: "center",
        textAlign: 'center',
       // fontFamily: fonts.FONT_GOOGLE_SANS_REGULAR
      },
      
      cardView: {
       width: "100%",
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 4,
        shadowOpacity: 0.2,
       // justifyContent: 'center',
        shadowOffset: {
          height: 0.5,
          width: 0.1
        },
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'column',
        marginRight: 10,
        paddingRight: 10,
       // alignSelf: 'center'
      },
      imageStyle: {
        width: 114,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10
      },
    
      imageQRStyle: {
        // width: scale(100),
        // height: scale(100),
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
      },
    
      buttonStyle:{
        marginTop: 20,
        marginBottom: 10,  
         marginLeft: 10,
        backgroundColor: "#FE474C",
        borderRadius: 10,
        height: 45,
        width: "100%",
       // justifyContent:'center',
        //alignItems: 'center',
        color:'white',
        textAlign:'center',
        alignSelf:'center',
        paddingTop: 10



      },
      cancelViewStyle: {
        position: "absolute",
        right: 20,
        height: 64,
        justifyContent: "center",
        color: "white",
    
      },
      cancelTextStyle: {
    //  fontFamily: fonts.FONT_GOOGLE_SANS_REGULAR,
        fontSize: 15,
        color: "white"
      },
});

export default ReferAndEarn;

