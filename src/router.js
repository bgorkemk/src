import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import UpdateTweet from './components/updateTweet';
import NewTweet from './components/newTweet';

const RouterComp = () => {
    return (
        <Router titleStyle={{color: '#e87b79', textAlign: 'center', flex: 1}}>
            <Scene key='root' hideNavBar={true}>

                <Scene key='auth'>
                    <Scene key='login'
                        component={LoginForm}
                        title='Login'
                        hideNavBar={true}
                        initial
                        />
                                        
                </Scene>

                <Scene key='main' >
                    <Scene key='tweets'
                        component={Tweets}
                        title='Tweets'
                        rightTitle='New'
                        onRight={() => Actions.newTweet()}
                        leftTitle='Update'
                        onLeft={() => Actions.updateTweet()}
                        initial                        
                        />  
                    <Scene key='newTweet'
                        component={NewTweet}
                        title='New Tweet'                                                
                        /> 
                    <Scene key='updateTweet'
                        component={UpdateTweet}
                        title='Update / Delete Tweet'                                                
                        />  
                        
                </Scene>
            </Scene>
            
        </Router>
    )
}

export default RouterComp;