import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import SideMenu from 'react-native-elements'


import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Maps from './components/Maps/Maps'
import ApartmentList from './components/ApartmentList/ApartmentList'
//import Sidebar from './components/Sidebar/Sidebar'
import TenantNotify from './components/TenantNotify/TenantNotify'

export default class App extends React.Component {
  render() {
    return (

      <Navigator initialRoute = {{ id: 'Login'}}
      renderScene = {this.navigatorRenderScence} />
    );
  }

  navigatorRenderScence(route, navigator) {
    switch (route.id) {
      case 'Login':
        return (<Login navigator = {navigator} /> );
      case 'CreateAccount':
        return (<CreateAccount navigator = {navigator} /> );
      case 'Maps':
          return (<Maps navigator = {navigator} /> );
      case 'ApartmentList':
          return (<ApartmentList navigator = {navigator} /> );
        break;
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});



// export default class App extends React.Component {
//   render() {
//     return (
//       <Maps />
//
//     );
//   }
// }
