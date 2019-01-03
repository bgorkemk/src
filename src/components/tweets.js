import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchTweet } from '../actions';

class Tweets extends Component {

    componentDidMount(){
        this.props.fetchTweet();
    }

    render() {
        return (
            <View>
                <Text> Tweets </Text>
                <Text> Tweets </Text>
                <Text> Tweets </Text>
                <Text> Tweets </Text>
                <Text> Tweets </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {        

    const tweetList = _.map(state.tweetList, (val, uid) => {
        return {...val, uid}
    });

    return {
        tweetList
    }
}

export default connect(mapStateToProps, {
    fetchTweet
})(Tweets);