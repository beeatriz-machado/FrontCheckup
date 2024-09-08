import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput


} from 'react-native';
import { Button } from "react-native-web";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'




export default function SingIn(){
    return (

        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>            
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder="Digite seu e-mail"
                style={styles.input}/>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha"
                style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Cadastrar</Text>
                </TouchableOpacity>



            </Animatable.View>



        </View>
    )
};


// variaveis de estilização
const backBlue = '#2D9DF9'
const backWhite = '#F4F7FF'
const colorText = '#A1A1A1'




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:backBlue

    },

    containerHeader:{
        marginTop: '14%',
        marginBottom:'8%',
        paddingStart:'5%',
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color: backWhite
    },
    containerForm:{
        backgroundColor: backWhite,
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:13
    },
    button:{
        backgroundColor:backBlue,
      
        position:'absolute',
        borderRadius: 50,
        paddingVertical: 8,
        width:'50%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems:'center',
        justifyContent:'center',
        width:'55%',
    },
    buttonText:{
        fontSize:18,
        color: backWhite,
        fontWeight:'bold'

    },

    buttonRegister:{
        // marginTop:'50%',
        alignSelf:'center',
        position:'absolute',
        borderRadius: 50,
        paddingVertical: '2%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems:'center',
        justifyContent:'center',
        width:'35%',
        backgroundColor:'#5271FF'
    },
    registerText:{
        color:backWhite,
        fontWeight:'bold'
    }
})