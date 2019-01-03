import firebase from 'firebase';

export const TWEET_CHANGED = 'tweet_changed';
export const SEND_TWEET = 'send_tweet';
export const FETCH_TWEET = 'fetch_tweet';

const REF_DATABASE = '/tweets';
export const changeTweet = (tweet) => {
    return{
        type: TWEET_CHANGED,
        payload: tweet
    }
}

export const sendTweet = (tweet) => {
    //TODO
    const currentUser = firebase.auth().currentUser;

    const email = currentUser.email;

    return (dispatch) => {
        firebase.database().ref(REF_DATABASE)
        .push({ email, tweet})
        .then(() => {
            dispatch({
                type: SEND_TWEET
            })
        })
    }
}

export const fetchTweet = () => {
    return (dispatch) => {
        firebase.database().ref(REF_DATABASE)
        .on('value', (snapshot) => {
            dispatch({
                type: FETCH_TWEET,
                payload: snapshot.val()
            })
        })
    }
}