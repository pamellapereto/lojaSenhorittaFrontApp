import * as React from 'react';
import { Alert, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import { styles } from '../../css/Styles'
import { ipnode } from '../../../../config/ip';

export default function Main(props: any) {

    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");


    return (
        <View>
            <View style={styles.caixa}>
                <TextInput placeholder='Usuário' keyboardType='default' value={usuario} onChangeText={(value)=> setUsuario(value)}/>
                <TextInput secureTextEntry placeholder='Senha' keyboardType='default' value={senha} onChangeText={(value)=> setSenha(value)}/>
            </View>

         
            <View style={styles.viewBtn}>

                <TouchableOpacity onPress={() => { props.acao.navigate("Home") }} style={styles.btnLogin}>
                    <MaterialCommunityIcons name="login" size={24} color="black" />
                    <Text>Login</Text>
                </TouchableOpacity>




                <TouchableOpacity onPress={() => props.acao.navigate("Cadastro") } style={styles.btnCadastrar}>
                    <FontAwesome5 name="user-plus" size={24} color="black" />
                    <Text>Cadastrar</Text>
                </TouchableOpacity>


            </View>

        </View>
    )

}

function efetuarLogin(usuario:any,senha:any) {

    if (usuario == "" || senha == ""){
        return Alert.alert("Erro", "você deve preencher todos os campos");
    }

    fetch (`${ipnode}/api/usuarios/login`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
    body: JSON.stringify({
        nomeusuario: usuario,
        senha: senha
    })
    })

    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((erro) => console.error(`Erro -> ${erro}`));

}