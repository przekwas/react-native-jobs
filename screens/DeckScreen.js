import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {

    static navigationOptions = {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="description" size={30} color={tintColor}/>
        }
    }

    renderCard(job) {

        initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            longitudeDelta: 0.02,
            latitudeDelta: 0.045
        };

        return (
            <Card title={job.jobtitle}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android' ? true : false}
                        initialRegion={initialRegion}
                    ></MapView>
                </View >
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                </Text>
            </Card >
        );
    }

    renderNoMoreCards = () => {
        return (
            <Card title='No More Jobs!'>
                <Button
                    title="Back to Map"
                    large
                    icon={{ name: "my-location" }}
                    backgroundColor="#03A9F4"
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        );
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    keyProp='jobkey'
                    onSwipeRight={job => this.props.likeJob(job)}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
    }
});

const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);