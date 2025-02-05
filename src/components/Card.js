//Importacao

import {Text, TouchableOpacity, StyleSheet, View, Image} from "react-native";

//Definicao

const Card = (props)=>{

    const imgSource = props.imgSource;
    const titulo = props.titulo;
    const data = props.data;

    return(
        <View style={estilos.view}>
            <View style={estilos.cImagem}>
                <Image style={estilos.imagem} resizeMode="contain" source={{uri:imgSource}} />
            </View>

            <View style={estilos.cTitulo}>
                <Text style={estilos.textoTitulo}>{titulo}</Text>
            </View>

            <View style={estilos.cData}>
                <Text style={estilos.textoData}>{data}</Text>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    view:{
        margin:20,
        flex:1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        borderRadius: 15,
        height: "90%",
        width:200
    },
    cImagem:{
        padding: 5,
        flex:0.50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cTitulo:{
        flex:0.30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cData:{
        flex:0.20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },


    imagem:{
        height: "100%",
        width: "100%"
    },
    textoTitulo:{
        fontSize: 20,
        color: "#3F92C5",
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
    },
    textoData:{
        fontSize: 15,
        color: "#8B8B8B",
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
    }
});

//Exportacao

export default Card;