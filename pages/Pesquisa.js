import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import{pesquisarNomeFruta} from '../pages/Modelfrutas';


export default function Pesquisa() {
const [dadosFrutas, setdadosFrutas] = useState([]);

async function buscarFruta(){
  const resultado = await pesquisarNomeFruta(nomeFruta);
  if (resultado) {
    setdadosFrutas(resultado);
  } else {
    Alert.alert('Fruta não encontrada!');
    setdadosFrutas('');
  }
}

  return (
    <View style={estilo.container}>
     <Text style={estilo.titulo}>Qual fruta você quer?</Text>

     <TextInput 
     style={estilo.textInput}
     placeholder='Digite uma fruta.'
     
     />

     <TouchableOpacity style={estilo.botao} onPress={()=> buscarFruta()}>
        <Text style={estilo.textobotao}>Pesquisar</Text>
     </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b4d8',
    alignItems: 'center',
    justifyContent: 'center',
},
textInput:{
  borderColor:'#edf6f9',
  fontSize:15,
  width:'80%',
  height:30,
  borderWidth:2,
  borderRadius:8,
  marginTop:25,
  paddingHorizontal:10,

},
botao:{
  backgroundColor:"#f72585",
  marginTop:15,
  padding:10,
  borderRadius:15,
  width:'80%',
  justifyContent:'center',
  alignItems:'center',
},
textobotao:{
  fontSize: 20,
  fontWeight: '700',
  color:"black"
},
titulo:{
  fontSize:30,
  color:"#fff"
},
});

