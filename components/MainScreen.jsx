import React from 'react'
import { Text } from 'react-native-paper'
import { StatusBar } from 'react-native'

import WeatherCard from './WeatherCard'
import { View } from 'react-native'
const MainScreen = () => {
    return (
        <View style={{ marginTop: StatusBar.currentHeight}}>
            <WeatherCard />
        </View>
    )
}

export default MainScreen
