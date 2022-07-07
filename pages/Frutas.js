import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,} from 'react-native';

export default function Frutas() {

  return (
    <View style={estilo.container}>

     <Text style={estilo.titulo}>Lista de frutas</Text>

     <FlatList
      data={frutas}
      renderItem={({item})=>
    <TouchableOpacity>
    <View style={estilo.grupoFrutas}>
      
        <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
        <Text style={estilo.textoBotaoValor}>{item.valor}</Text>
    
    </View>
    </TouchableOpacity>
    }
     />
      <StatusBar style="auto" />

    </View>
  );
}

const frutas = [
  {
    id: 1,
    fruta: 'Banana',
    valor: 'R$ 2,56',
    Image: "../appfrutas/assets/banana.jpg"
  },
  {
    id: 2,
    fruta: 'Abacaxi',
    valor: 'R$ 7,53',
  },

]

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b4d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:30,
    color:"#fff",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,

  },
  grupoFrutas:{
    backgroundColor:"#f72585",
    justifyContent:'center',
    margin:15,
    padding:5,
    borderRadius:15,
    width: 300,
    alignContent:'center',
    textAlign:'center',
    alignItems:'center'
    
  },
  botaoFrutas:{

  },
  textoBotaoFruta:{
    fontSize:20,
  },
  textoBotaoValor:{
    fontSize: 20,
  },
});
