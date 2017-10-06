import React, {Component} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import MapView from 'react-native-maps'
import SideMenu from 'react-native-elements'


export default class Maps extends Component {
  render() {
    return (

    // <View style={styles.container}>
      <MapView style ={styles.map}
        initialRegion={{
          latitude: 40.425869,
          longitude: -86.908066,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>

        <MapView.Marker
          coordinate={{
            latitude: 40.425869,
            longitude: -86.908066,
          }}
        />

        <MapView.Marker
          coordinate={{
            latitude: 40.43,
            longitude: -86.908022,
          }}
        />
        <MapView.Marker
          coordinate={{
            latitude: 40.44,
            longitude: -86.899,
          }}
        />

        <MapView.Marker
          coordinate={{
            latitude: 40.423,
            longitude: -86.899,
          }}
        />

        <MapView.Marker
          coordinate={{
            latitude: 40.427,
            longitude: -86.916,
          }}
        />

	    </MapView>
      //</View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});
