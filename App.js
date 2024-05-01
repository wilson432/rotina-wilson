import React from 'react';
import { Text, StyleSheet, View,ImageBackground, Image, FlatList } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import ROTINAS from './data';


export default function App() {
  return (
  <ImageBackground source={{ uri: 'https://image.cdn2.seaart.ai/2023-10-22/20604199683267589/dbc472788e5fe44220d940c183e03b84081d9449_high.webp' }} style={estilo.fundo} >
    <View style={estilo.container}>
      <Header></Header>
      <View style={{ width: '100%', height: 300 }}>
        <FlatList
          data={ROTINAS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              descricao={item.Descricao}
              porcentagem={item.porcentagem}
              imagem={item.imagem}
            />
          )}
        />
      </View>
    </View>
  </ImageBackground> 
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  fundo: {

    flex: 1,
    width:'100%',
    height:'100%',

  },
  
});
