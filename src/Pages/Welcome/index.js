import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity


} from 'react-native';
import { Button } from "react-native-web";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
    
    return (
        
        // styles.XXXXX são utilizados para auxilio na estilização
        <View style={styles.container}>

            {/* Logo */}
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('C:/Users/beatr/loginReact/StickerSmash/src/assets/logoblue.png')}
                style={{width: '100%', height:'75%'}}

                resizeMode="contain"/>
            </View>

            <Animatable.View delay={600} animation="fadeInUp"  style={styles.containerForm}>
            
                <Text style={styles.title}>Bem-vindo</Text>
                <Text style={styles.text}>Faça login para começar</Text>


                {/* Botão */}
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate("SingIn")}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </Animatable.View>




        </View>
    )
};


// variaveis de estilização
const backBlue = '#2D9DF9'
const backWhite = '#F4F7FF'
const colorText = '#A1A1A1'



// Estilização
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: backWhite
    },

    containerLogo:{
        flex:2,
        backgroundColor: backWhite,
        // justifyContent:'center',
        // alignItems:'center'
        
    },

    containerForm:{
      flex:1,  
      backgroundColor: backBlue,
      borderTopLeftRadius: 25,
      borderTopRightRadius:25,
      paddingStart: '5%',
      paddingEnd:'5%'

    },

    title:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
        paddingStart: '35%',
        // paddingEnd:'15%',
        color: backWhite,
        
        justifyContent:'center',
        alignItems:'center',
        
        // backgroundColor:'red'
    },

    text:{
        color:backWhite,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center'
        

    },
    
    button:{
        position:'absolute',
        backgroundColor: backWhite,
        borderRadius: 50,
        paddingVertical: 8,
        width:'60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color: backBlue,
        fontWeight:'bold'

    }



})