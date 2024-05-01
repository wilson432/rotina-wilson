import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
  cardTarefa: {
    marginTop: 25,
    backgroundColor: 'rgba(63, 85, 117,0.5)',
    width: '100%',
    height: 250,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    
  },  
  textoCard: {
    fontSize: 15,
    marginTop: 5,
    color:'#ffff',
    
  },
  imagemCard: {
    width: 160,
    height: 120,
    borderRadius:15,
  
  },
  tituloCard: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1d3557',
    paddingBottom:30,
    color:'#ffff',
  },

  textos: {
    
    alignItems: 'center',
    paddingBottom:80,
    color:'#ffff',
  },

  porcentagem: {
    color:'#ffff',
  }

})

export default estilo;

