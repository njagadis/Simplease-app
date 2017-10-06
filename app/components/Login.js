import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, Alert, Dimensions } from 'react-native';


// <Text style={{alignItems: 'center'}}
//
//     style={{fontSize: 40}}>
//     Simplease
// </Text>


// <Image
//   style={styles.logo}
//   source={require('../../Logo/d.png')}
// />

import CreateAccount from './CreateAccount.js'

export default class Login extends Component {

  constructor(props) {
   super(props);
   this.state = {
     username: '',
     password: ''
   };
  // this._onGuestButton = this._onGuestButton.bind(this)
 }

 // _onGuestButton() {
 //   Alert.alert('You are a guest!')
 // }
 // _onCreateAccountButton() {
 //   Alert.alert("HI")
 // }
 _onLoginButton = (text) => {
   this.setState({ username: text})
 }

 _onLoginButtonPass = (text) => {
  this.setState({ password: text})
 }

 _loginPrint = (username, password) => {
   alert('Username: ' + username + 'Password: ' + password)
 }

  render(){

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>


          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../img/logo/d.png')}
              />

          </View>
          <TextInput
            placeholder='Username'
            returnKeyType="next"
            //onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            //value={this.state.username}
            //onChangeText={(username) => this.setState({username})}
            onChangeText={this._onLoginButton}
          />


          <TextInput
            placeholder='Password'
            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            // value={this.state.password}
            //onChangeText={(password) => this.setState({password})}
            onChangeText={this._onLoginButtonPass}
          />

          <View style={{margin:0}} />

          <TouchableOpacity style={styles.button}  /*onPress={this._onLoginButton}*/

                // onPress = {
                //   () => this._loginPrint(this.state.username, this.state.password)
                // }>
                //onPress={ () => this.props.navigator.push({ id: 'ApartmentList'}) }


                onPress = {
                  () => this.props.navigator.push({ id: 'ApartmentList'})
                }>
                  <Text style={styles.buttonText}>LOGIN</Text>

          </TouchableOpacity>

          <Button style={styles.otherButton}

              onPress={ () => this.props.navigator.push({ id: 'CreateAccount'}) }
              //onPress={this._onCreateAccountButton()}
              title="Create an account"
          />
          <Button style={styles.otherButton}
              onPress={ () => this.props.navigator.push({ id: 'Maps'}) }
              title="Continue as guest"
          />



    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:0,
    paddingHorizontal: 30,
    backgroundColor: '#ecf0f1',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'center'
  },
input: {
  height: 40,
  backgroundColor: '#bdc3c7',
  marginBottom: 20,
  paddingHorizontal: 10,
  //paddingVertical: 10,
  color: '#ecf0f1'
},
button: {
  paddingVertical: 30,
  backgroundColor: '#3498db',
  height: 20,
  marginBottom: 0
},
buttonText: {
  textAlign: 'center',
  color: '#FFF',

},
logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center'
},
logo: {
  paddingVertical: 20,
  width: 400,
  height: 300
},
otherButton: {
  paddingVertical: 0
}

});
