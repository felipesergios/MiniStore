import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20,
        
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold'
    },
    descripton:{
        fontSize:16,
        lineHeight:24,
        color:'#737380'
    },
    cardList:{
        marginBottom:50,
      marginTop:32,  
    },
    card:{
        padding:30,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
    },
    cardProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
    },
    cardValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:34,
        color:'#737380',
    },

    logo:{
        marginLeft:90,
        marginTop:-200,
        width:200,
        height:200,
        borderRadius:100

    },
    btnGreen:{
        width:"80%",
    backgroundColor:"#006AE4",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
    },
    registerBtntext:{
        color:'white',
        fontSize:25
    }

})