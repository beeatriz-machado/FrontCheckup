import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from 'C:/Users/beatr/loginReact/StickerSmash/src/Pages/Welcome'
import SingIn from 'C:/Users/beatr/loginReact/StickerSmash/src/Pages/SingIn'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        // navegador das telas
        <Stack.Navigator>  
            {/* tela welcome */}
            <Stack.Screen 
                name = "Welcome"
                component={Welcome}
                options={{headerShown: false}}       
                />
                {/*Para não mostrar o header*/}
            
            
            {/* tela de login */}
            <Stack.Screen 
                name = "SingIn"
                component={SingIn}
                options={{headerShown: false}}      
                />

        </Stack.Navigator>

    )
}