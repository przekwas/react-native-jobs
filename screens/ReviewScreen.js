import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Platform, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button
                    title='Settings'
                    backgroundColor='rgba(0,0,0,0)'
                    color='rgba(0, 122, 255, 1)'
                    onPress={() => navigation.navigate('settings')}
                />
            ),
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    };

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {

            const {
                company,
                formattedRelativeTime,
                jobkey,
                longitude,
                latitude,
                jobtitle
            } = job;

            const initialRegion = {
                longitude: longitude,
                latitude: latitude,
                longitudeDelta: 0.02,
                latitudeDelta: 0.045
            };

            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{ height: 200 }}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                            initialRegion={initialRegion}
                        ></MapView>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title="Apply Now!"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL('http://google.com/')}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    italics: { fontStyle: 'italic' },
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

const mapStateToProps = ({ likedJobs }) => {
    return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);