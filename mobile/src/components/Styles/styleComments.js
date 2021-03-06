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
    cardValue:{
        marginTop:8,
        fontSize:19,
        marginBottom:10,
        color:'#737380',
    },

    logo:{
        marginLeft:80,
        marginTop:0,
        width:100,
        height:100,
        borderRadius:100

    },
    btnBlue:{
        width:"50%",
    backgroundColor:"#006AE4",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    marginLeft:80
    },
    registerBtntext:{
        color:'white',
        fontSize:15
    },

    btnGreen:{
        width:"50%",
    backgroundColor:"#0B9C15",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    marginLeft:80
    },


})