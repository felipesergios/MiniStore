import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, View ,Image ,FlatList,Text , Button} from 'react-native';
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
                Total de <Text style={styles.headerTextBold}>{products.length} produtos cadastrados.</Text>
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

                <View style={styles.incidentList}>
                 <Button
        title="Comentarios ? "
        onPress={() => navigation.navigate('comments',{productID:product.id})}
      />
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}>Produto:</Text>
                <Text style={styles.incidentValue}>{product.name}</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
            <Text style={styles.incidentValue}>{product.describe}</Text>

                <Text style={styles.incidentProperty}>Preço:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',
            {style:'currency',currency:'BRL'}).format(product.price)}</Text>
                   <Image source={{uri: product.photo}}
       style={styles.logo} />
                </View>
                <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />

      
            </View>
            )}
            />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F17EF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Scroll:{
    flex:1,
    top:-100,
    width:350
  }
})

