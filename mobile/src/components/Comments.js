import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, View ,Image ,FlatList,Text ,TouchableOpacity} from 'react-native';
import styles from '../components/Styles/styleComments'

import api from '../services/api'


export default function Comments({navigation , route}) {
  const { productID } = route.params;
  const [products,setProducts] = useState([])
  async function load(){
    const res = await api.get(`/show/${productID}/comments`)
    setProducts(res.data)
}
load()
/*useEffect(()=>{
    load()
}) */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
                <Text style={styles.headerText}>
                Foram feitos <Text style={styles.headerTextBold}>{products.length} comentarios</Text>
                </Text>
            </View>
            <Text style={styles.title}>
            Comentarios do produto
            </Text>
            <Text style={styles.descripton}>
            Veja o que os clientes estão comentando sobre o item 
            </Text>
    
      <StatusBar style="auto" />
      <FlatList 
            style={styles.cardList}
            data={products}
            keyExtractor={product=>String(product.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={load}
            onEndReachedThreshold={0.2}
            renderItem={({item:product})=>(

                <View style={styles.cardList}>
                <View style={styles.card}>
                <Image source={{uri:`${product.photo}`}}
       style={styles.logo} />
                <Text style={styles.cardValue}>{product.name}</Text>
            <Text style={styles.cardValue}>{product.comment}</Text>

                <Text style={styles.cardProperty}>Stars:{product.stars}</Text>
            
                   
                </View>
                

      
            </View>
            
            )}
            />
            <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.btnBlue}>
          <Text style={styles.registerBtntext}>Voltar</Text>
        </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('commentsnew',{ID_P:productID})} style={styles.btnGreen}>
          <Text style={styles.registerBtntext}>Comentar !</Text>
        </TouchableOpacity>


    </View>
  );
}


