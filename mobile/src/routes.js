import React from 'react'
import { View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack = createStackNavigator()
import Home from './components/Home'
import Detals  from './components/Detals'
import Comments from './components/Comments'
import CommentForm from './components/CommentForm';

const Tab =createBottomTabNavigator();
function Tabs({navigation , route}){
    const {productID} = route.params;
    //alert(productID)
  return(
    <Tab.Navigator initialRouteName="Detalhes" styles={styles.container} 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Detalhes') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Comentarios') {
            iconName = focused ? 'chatbox-ellipses-outline' : 'chatbubbles-outline';
          }else if (route.name === 'commentsnew') {
            iconName = focused ? 'add-circle-outline' : 'chatbubbles-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}  
    options={{ tabBarBadge: 3 }}>
      <Tab.Screen name="Detalhes" component={()=> <Detals data={productID}/>} />
      <Tab.Screen name="Comentarios" component={()=> <Comments data={productID}/>} options={{title:'Comentarios'}}/>
      <Tab.Screen name="commentsnew" component={()=> <CommentForm data={productID}/>} options={{title:'Comentar'}}/>
    </Tab.Navigator>
  )
}

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="home" component={Home} options={{ title: 'Overview' }}/>
                <AppStack.Screen name="detals" component={Tabs}/>
                <AppStack.Screen name="comments" component={Comments}/>
                <AppStack.Screen name="commentsnew" component={CommentForm}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:15
    },
  });