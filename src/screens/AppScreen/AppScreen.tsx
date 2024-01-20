import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Text } from '@rneui/themed'
import { useTheme } from '../../hooks';

const AppScreen = () => {
    const{ darkMode, toggleTheme } = useTheme()
    return (
        <SafeAreaView >
            <Text>AppScreen</Text>
            <Text >DarkMode {JSON.stringify(darkMode)}</Text>
            <Button 
                title={darkMode? 'Activar lightMode' : 'Activar darkMode'} 
                onPress={toggleTheme}
            />
        </SafeAreaView>
    )
}

export default AppScreen

const styles = StyleSheet.create({})