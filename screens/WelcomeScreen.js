import _ from 'lodash';
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Jobs App!', color: '#03a9f4' },
    { text: 'Use this to get a Job!', color: '#009688' },
    { text: 'Set your location, then swipe away!', color: '#03a9f4' }
];

class WelcomeScreen extends Component {

    state = { token: null };

    async componentWillMount() {

        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.setState({ token });
            this.props.navigation.navigate('main');
        } else {
            this.setState({ token: false });
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {

        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }

        return (
            <View>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            </View>
        );
    }
};

export default WelcomeScreen;