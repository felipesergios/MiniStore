import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, View ,Image ,FlatList,Text , Button,TouchableOpacity} from 'react-native';
import styles from '../components/styles'

import api from '../services/api'


export default function Detals({navigation , route}) {
  const { productID } = route.params;
  const [products,setProducts] = useState([])
  async function load(){
    const res = await api.get(`/show/${productID}`)
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
                Mostrando <Text style={styles.headerTextBold}>{products.length} produto</Text>
                </Text>
            </View>
            <Text style={styles.title}>
            Vamos analisar o produto ? 
            </Text>
            <Text style={styles.descripton}>
            Aqui você tem a visão mais detalhada do produto :) 
            </Text>
    
      <StatusBar style="auto" />
      <FlatList 
            style={styles.incidentList}
            data={products}
            keyExtractor={product=>String(product.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={load}
            onEndReachedThreshold={0.2}
            renderItem={({item:product})=>(

                <View style={styles.cardList}>
                 

<TouchableOpacity  onPress={() => navigation.navigate('comments',{productID:product.id})} style={styles.btnBlue}>
          <Text style={styles.registerBtntext}>Comentarios ?</Text>
        </TouchableOpacity>
                <View style={styles.card}>
                <Text style={styles.cardProperty}>Produto:</Text>
                <Text style={styles.cardValue}>{product.name}</Text>
                <Text style={styles.cardProperty}>Preço:</Text>
            <Text style={styles.cardValue}>{Intl.NumberFormat('pt-BR',
            {style:'currency',currency:'BRL'}).format(product.price)}</Text>
                   <Image source={{uri: product.photo}}
       style={styles.logo} />
        <Text style={styles.cardValueDescription}>{product.describe}</Text>
                </View>
               

<TouchableOpacity  onPress={() => navigation.goBack()} style={styles.btnBlue}>
          <Text style={styles.registerBtntext}>Voltar</Text>
        </TouchableOpacity>

      
            </View>
            )}
            />
    </View>
  );
}


