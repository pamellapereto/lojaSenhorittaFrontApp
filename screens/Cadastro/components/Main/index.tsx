import { useState } from "react";
import { Alert, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "../../css/Styles";
import { ipnode } from "../../../../config/ip";


export default function Main() {

    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");   
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [cpf,setCpf] = useState(""); 


    return (
        <ScrollView horizontal={false} style={{flex:1}}>

            <View>
                <TextInput style={styles.caixa} placeholder='Usuário' keyboardType='default' value={usuario} onChangeText={(value)=> setUsuario(value)}/>
                <TextInput style={styles.caixa} secureTextEntry placeholder='Senha' keyboardType='default' value={senha} onChangeText={(value)=> setSenha(value)}/>
                <TextInput style={styles.caixa} placeholder='Nome Completo' keyboardType='default' value={nome} onChangeText={(value)=> setNome(value)}/>
                <TextInput style={styles.caixa} placeholder='E-mail' keyboardType='email-address' value={email} onChangeText={(value)=> setEmail(value)}/>
                <TextInput style={styles.caixa} placeholder='CPF' keyboardType='number-pad' value={cpf} onChangeText={(value)=> setCpf(value)}/>
            </View>


            <View>
                <TouchableOpacity style={styles.btnCadastrar} onPress={() => {
                    efetuarCadastro(usuario,senha,nome,email,cpf);
                }}>
                    <FontAwesome5 name="user-plus" size={24} color="black" />
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )

}

function efetuarCadastro(nome:any,email:any,cpf:any,usuario:any,senha:any) {
    if (
        nome == "" || 
        email == "" || 
        cpf == "" || 
        usuario == "" || 
        senha == "" ) {
            return Alert.alert("Erro","Você deve preencher todos os campos");
        }

        fetch(`${ipnode}/api/usuarios/cadastro`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeusuario: usuario,
                senha: senha,
                email: email,
                nomecompleto: nome,
                cpf: cpf,
        })
    })
    .then((response) => response.json())
    .then((rs)=> console.log(rs))
    .catch((erro)=> console.error(`Erro -> ${erro}`))
}