import React , {useState}from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,ScrollView ,Button} from 'react-native';
import api from '../services/api'

function CommentForm({navigation , route}){
    const { ID_P } = route.params;
    console.log(ID_P)

  async function Cadastro(e){
    e.preventDefault()
    const res = await api.post('/comment/new',{name:name,idProduct:ID_P,comment:comment,stars:stars,photo:photo})
    alert('Cadastrado')

  }
 
  const [name,setName]=useState('')
  //const [idProduct,setIdproduct]=useState('')
  const [comment,setComment]=useState('')
  const [stars,setStars]=useState('')
  const [photo,setPhoto]=useState('')

  
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.logo}>Adicione um comentario</Text>
       
        <View style={styles.inputView} >
        <Text style={styles.label} >Nome</Text>
          <TextInput  
            
            style={styles.inputText}
            placeholder="qual o seu nome?" 
            placeholderTextColor="#003f5c"
            onChangeText={setName}/>
        </View>

       

        


        <View style={styles.inputView} >
        <Text style={styles.label} >Comentario</Text>
          <TextInput  
           
            style={styles.inputText}
            placeholder="O que você achou ? " 
            placeholderTextColor="#003f5c"
            onChangeText={setComment}/>
        </View>

        <View style={styles.inputView} >
        <Text style={styles.label} >Estrelas</Text>
          <TextInput  
           
            style={styles.inputText}
            placeholder="Quantas estrelas ele merece ? " 
            placeholderTextColor="#003f5c"
            onChangeText={setStars}/>
        </View>

        <View style={styles.inputView} >
        <Text style={styles.label} >Link da sua foto</Text>
          <TextInput  
           
            style={styles.inputText}
            placeholder="cola aqui o link da sua foto :)" 
            placeholderTextColor="#003f5c"
            onChangeText={setPhoto}/>
        </View>

        


      
       
        <TouchableOpacity  onPress={Cadastro} style={styles.registerBtn}>
          <Text style={styles.registerBtntext}>Salvar</Text>
        </TouchableOpacity>
    
        <Button style={styles.detailsButton}
        title="Voltar"
        onPress={() => navigation.navigate('home')}
      />
  
      </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#000",
    marginBottom:40
  },
  label:{
    fontWeight:"bold",
    marginTop:-20,
    fontSize:15,
    color:"#000",
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:5,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    marginTop:5
  },
  inputText:{
    height:50,
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:25
  },
  registerBtn:{
    width:"80%",
    backgroundColor:"#0B9C15",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  registerBtntext:{
    color:"white",
    fontSize:25
  }
});

export default CommentForm