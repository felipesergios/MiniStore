import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, View ,Image ,FlatList,Text , Button,TouchableOpacity} from 'react-native';
import styles from '../components/Styles/styleHome'

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo-ads-admob";

import api from '../services/api'


export default function Home({navigation}) {
  function bannerError(){
    console.log("An error");
    return;
  }
  const [products,setProducts] = useState([])
  async function load(){
    const res = await api.get('/')
    setProducts(res.data)
}



useEffect(()=>{
    load()
},[]) 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
                <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{products.length} produtos cadastrados.</Text>
                </Text>
            </View>
            <Text style={styles.title}>
            Bem vindo
            </Text>
            <Text style={styles.descripton}>
            Você está na miniStore aplication , sua loja virtual de equipamentos eletronicos.
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
                <Text style={styles.cardProperty}>Produto:</Text>
                <Text style={styles.cardValue}>{product.name}</Text>


                <Text style={styles.cardProperty}>Preço:</Text>
            <Text style={styles.cardValue}>{Intl.NumberFormat('pt-BR',
            {style:'currency',currency:'BRL'}).format(product.price)}</Text>
                   <Image source={{uri: product.photo}}
       style={styles.logo} />
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate('detals',{productID: product.id})} style={styles.btnGreen}>
          <Text style={styles.registerBtntext}>Veja os detalhes</Text>
        </TouchableOpacity>
                
            </View>
            )}
            />
<AdMobBanner 
          style = {styles.bottomBanner} 
          bannerSize = "fullBanner" 
          adUnitID = "ca-app-pub-3940256099942544/6300978111" 
          // ID de teste, substituir por your-admob-unit-id 
          testDeviceID = "EMULATOR" 
          didFailToReceiveAdWithError = {bannerError} 
        /> 

    </View>
  );
}



