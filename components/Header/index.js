import {View, Text} from 'react-native'
import estilo from './style'

export default function Header(){
    return(

        <>
            <Text style={estilo.titulo}>Minha Rotina Semanal</Text>
            <Text style={estilo.subtitulo}>Total de Horas = 168 - 100%</Text>
             <View style={{width:'90%', flexDirection: 'row', marginTop: 50, }}>
            <Text style={estilo.tituloCard}>Atividade</Text>
            <Text style={estilo.tituloCard}>Descrição e porcentagem</Text>
            </View>

        </>
    )
}