import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from 'react-native';


//import LoginInput from './LoginInput.js'
//<View style={{width: 375, height: 670, backgroundColor: 'skyblue'}} />
export default class CreateAccount extends Component {


  constructor(props) {
   super(props);
   this.state = {
     FirstName: '',
     LastName: '',
     UserName: '',
     Password: '',
     Password2: '',
     Email: '',
     Landlord: ''

   };
 }


 _handleFirstName = (text) => {
   this.setState({FirstName: text})
 }

 _handleLastName = (text) => {
   this.setState({LastName: text})
 }

 _handleUserName = (text) => {
   this.setState({UserName: text})
 }

 _handlePassword = (text) => {
   this.setState({Password: text})
 }

 _handlePassword2 = (text) => {
   this.setState({Password2: text})
 }

 _handleEmail = (text) => {
   this.setState({Email: text})
 }
 _handleLandlord = (text) => {
   this.setState({Landlord: text})
 }

 _loginPrint = (FirstName, LastName, UserName, Password, Password2, Email, Landlord) => {
   alert('First Name: ' + FirstName + ' LastName: ' + LastName + ' UserName: ' + UserName + ' Password: ' + Password + ' Password2: ' + Password2 + ' Email: ' + Email + ' Landlord: '+ Landlord)
 }

  render(){

//    var validator = require("email-validator");

    return (

      <ScrollView>

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../Logo/d.png')}
        />

      </View>

          <View>

          <TextInput
            placeholder='First Name'

          // value=this.state.text

            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            //autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={this._handleFirstName}
          />

          <TextInput
            placeholder='Last Name'

          // value=this.state.text

            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            //autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={this._handleLastName}
          />

          <TextInput
            placeholder='Email'


            onChangeText={(text) => this.validateEmail}
            //value={this.state.email}

          // value=this.state.text

            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={this._handleEmail}


          />
          <TextInput
            placeholder='Username'

            // value=this.state.text

            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={this._handleUserName}
          />
          <TextInput
            placeholder='Password'

          // value=this.state.text

            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            onChangeText={this._handlePassword}

          />

          <TextInput
            placeholder='Re-enter Password'

          // value=this.state.text

            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            onChangeText={this._handlePassword2}

          />

          <TextInput
            placeholder='Are you a landlord? (Y/N)'

          // value=this.state.text

            returnKeyType="go"
            //secureTextEntry
            //autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.landlordInput = input}
            onChangeText={this._handleLandlord}

          />



          </View>

          <View style={{margin:0}} />

          <TouchableOpacity style={styles.button}  /*onPress={this._onLoginButton}*/

                onPress = {
                  () => this._loginPrint(this.state.FirstName, this.state.LastName, this.state.UserName,
                    this.state.Password, this.state.Password2, this.state.Email, this.state.Landlord)
                }>

                  <Text style={styles.buttonText}>Create Account</Text>

          </TouchableOpacity>


    </KeyboardAvoidingView>

    </ScrollView>
    );



    function validateEmail() {
      if (validator.validate(text)) {

      }
      else {
        style={styles:error}
        console.log("invalid")

      }

    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:50,
    paddingHorizontal: 30,
    backgroundColor: '#ecf0f1',
    width: 375,
    height:667,
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
  paddingVertical: 25,
  backgroundColor: '#3498db',
  height: 20,
  marginBottom: 50
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
  paddingVertical: 0,
  width: 250,
  height: 150
},
error: {
backgroundColor: '#ff0000'
}
});
