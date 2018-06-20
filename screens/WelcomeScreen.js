import React, { Component } from 'react';
import { View } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Jobs App!', color: '#03a9f4' },
    { text: 'Use this to get a Job!', color: '#009688' },
    { text: 'Set your location, then swipe away!', color: '#03a9f4' }
];

class WelcomeScreen extends Component {

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth')
    }

    render() {
        return (
            <View>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            </View>
        );
    }
};

export default WelcomeScreen;