import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
    }

    //If user successfully logs into the app and sends them onwards
    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return (
            <View />
        );
    }
};

const mapStateToProps = ({ auth }) => {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);