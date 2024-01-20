import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen/AuthScreen'
import { useTheme } from '../hooks'
import { getNavigationTheme } from '../utils'

const Stack = createNativeStackNavigator()

const AuthNavigation: React.FC = () => {
    
    const{ theme } = useTheme()
    const myTheme = getNavigationTheme(theme)
    return (
        <NavigationContainer 
            theme={myTheme} 
        >
            <Stack.Navigator 
                initialRouteName="AuthScreen"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name='login'
                    component={AuthScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation
