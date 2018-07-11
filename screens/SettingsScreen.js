import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {

    static navigationOptions = {
        headerStyle: {
                //Fix for overlapped header on android
                marginTop: Platform.OS === 'android' ? 24 : 0
        }
    }

    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <Button
                    title="Reset Liked Jobs!"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#f44336"
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        );
    }
};

export default connect(null, { clearLikedJobs })(SettingsScreen);