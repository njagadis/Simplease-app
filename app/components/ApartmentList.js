import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Image, ScrollView, FlatList, Alert } from 'react-native';
import {List, ListItem } from 'react-native-elements';

export default class ApartmentList extends Component {

    constructor(props) {
        super(props);

            this.state = {
                loading: false,
                data: [],
                page: 1,
                seed: 1,
                error: null,
                refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=200`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
             this.setState({ error, loading: false });
        });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };
    render() {
        return(
            <View>
                <List containerStyle={{borderTopWidth:0, borderBottomWidth: 0}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.location.street}
                                subtitle={`${item.location.city}, ${item.location.state}`}
                                containerStyle={{borderBottomWidth: 0}}
                            />
                        )}
                        keyExtractor={item => item.location.street}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </List>
            </View>
        );
    }

}
