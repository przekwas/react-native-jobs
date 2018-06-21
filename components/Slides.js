import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slides extends Component {

    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title='Onwards!'
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            );
        };
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={index}
                    style={[styles.slideStyle, { backgroundColor: slide.color }]}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{}} pagingEnabled horizontal>
                {this.renderSlides()}
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    slideText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    slideStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#0288d1',
        marginTop: 15
    }
})

export default Slides;