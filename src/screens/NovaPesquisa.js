//Importação

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { app, auth_mod } from '../firebase/config'
import { initializeFirestore, collection, addDoc } from 'firebase/firestore';

//Definição

const NovaPesquisa = (props) => {
  const [txtNome, setNome] = useState("");
  const [txtData, setData] = useState("");
  const [txtImagem, setImagem] = useState("");

  const [txtErroNome, setErroNome] = useState("");
  const [txtErroData, setErroData] = useState("");

  const db = initializeFirestore(app, { experimentalForceLongPolling: true });
  const userCollection = collection(db, "usuarios", auth_mod.currentUser.uid, "pesquisas");


  const cadastrar = () => {
    let invalido = txtNome == "" || txtData == "";
    txtNome == "" ? setErroNome("Preencha o nome da pesquisa") : setErroNome("");
    txtData == "" ? setErroData("Preencha a data") : setErroData("");
    const docPesquisa = {
      nome: txtNome,
      data: txtData
    }
    if (!invalido) {
      addDoc(userCollection, docPesquisa).then(() => {
        props.navigation.push("Drawer");
      }).catch((error) => {
        console.log(JSON.stringify(error));
      })

    }

  }

  return (
    <View style={estilos.view}>
      <View style={estilos.view2}>

        <View style={estilos.cNome}>
          <Text style={estilos.textoPadrao}>Nome</Text>
          <TextInput style={estilos.inputText} label='Nome' value={txtNome} onChangeText={setNome} />
          <Text style={estilos.textoValidacao}>{txtErroNome}</Text>
        </View>

        <View style={estilos.cData}>
          <Text style={estilos.textoPadrao}>Data</Text>

          <View style={estilos.cInputData}>
            <TextInput style={estilos.inputTextData} label='Data' value={txtData} onChangeText={setData} />
            <Icon name='calendar-month-outline' size={30} style={estilos.iconCalendario} />
          </View>

          <Text style={estilos.textoValidacao}>{txtErroData}</Text>
        </View>

        <View style={estilos.cImagem}>
          <Text style={estilos.textoPadrao}>Imagem</Text>
          <TextInput style={estilos.inputImagem} label='Imagem' value={txtImagem} onChangeText={setImagem} placeholder="Câmera/Galeria de imagens" />
        </View>

        <View style={estilos.cBotao}>
          <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
            <Text style={estilos.textoBotaoCadastrar}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "#372775"
  },
  view2: {
    flex: 1,
    width: "80%",
    flexDirection: "column",
    justifyContent: 'space-between',

  },
  cNome: {
    width: "90%",
    flex: 0.20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  cData: {
    width: "90%",
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cImagem: {
    width: "90%",
    flex: 0.40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cBotao: {
    width: "90%",
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },

  cInputData: {
    backgroundColor: 'white',
    width: "100%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconCalendario: {
    color: 'gray',
  },

  inputTextData: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: "90%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },

  inputText: {
    height: "50%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    width: "100%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white'
  },

  inputImagem: {
    width: "40%",
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    height: "70%",
    textAlign: 'center',
  },


  botao: {
    height: "100%",
    backgroundColor: '#37BD6D',
    width: "100%",
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  textoPadrao: {
    fontSize: 15,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',

  },
  textoValidacao: {
    fontSize: 15,
    color: "#FD7979",
    fontFamily: 'AveriaLibre-Regular',
  },
  textoBotaoCadastrar: {
    fontSize: 15,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: "100%"
  }


})

//Exportação

export default NovaPesquisa;