import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import SideMenu from 'react-native-elements'


import Login from '.app/components/Login'
import CreateAccount from '.app/components/CreateAccount'
import Maps from '.app/components/Maps'
import ApartmentList from '.app/components/ApartmentList'
//import Sidebar from './components/Sidebar/Sidebar'
import TenantNotify from '.app/components/TenantNotify'

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
