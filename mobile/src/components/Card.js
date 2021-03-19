import * as React from 'react';
import { Text, View, StyleSheet, Image , Button ,ScrollView} from 'react-native';

 function Card(){
  
    return (
     <>
     
      <View style={styles.container}>
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={styles.logo} />

       
       <View style={styles.aside}>
           
       <Text style={styles.paragraph}>
          Name of product : Aplicativo React
        </Text>
        <Text style={styles.h1}>
            Price of product : R$ 12:00
        </Text>
 <Text style={styles.h1}>Describe: Make with react and Expo</Text>
       
        <Button
          title="Comprar o bagulho"
          color='#8E4DFF'
          onPress={() => {alert(
              
             'This a testing of alert'
          )}}
        />
       </View>
       
      </View>
      </>
    
     
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
    flexDirection:'row',
    backgroundColor:'#fff',
    top:-10,
    maxWidth:700,
    maxHeight:500,
    marginBottom:1,
  },
  paragraph: {
    margin: 4,
    marginTop: 0,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 200,
    width: 200,
    marginRight:200,
    marginTop:0,
    borderRadius:100
  },

  h1:{
    margin: 0,
    marginTop: 0,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  aside:{
      alignItems:'flex-start',
      marginRight:10,
      marginLeft:-50,
      top:0

  }
});
export default Card