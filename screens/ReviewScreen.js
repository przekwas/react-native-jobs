import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

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

    componentDidMount() {
        console.log(this.props.likedJobs);
    }

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            return (
                <Card key={job.jobkey}>
                    <View style={{ height: 200 }}>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{job.company}</Text>
                            <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
                        </View>
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
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

const mapStateToProps = ({ likedJobs }) => {
    return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);