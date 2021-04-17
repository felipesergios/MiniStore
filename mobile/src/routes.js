import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator()
import Home from './components/Home'
import Detals  from './components/Detals'
import Comments from './components/Comments'
import CommentForm from './components/CommentForm';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="home" component={Home} options={{ title: 'Overview' }}/>
                <AppStack.Screen name="detals" component={Detals}/>
                <AppStack.Screen name="comments" component={Comments}/>
                <AppStack.Screen name="commentsnew" component={CommentForm}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}