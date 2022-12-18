import React from 'react'
import { Card, Title, Paragraph, Text } from 'react-native-paper'
import { Image, View } from 'react-native'
import SunIcon from '../assets/weathericon/SunIcon'
import * as Location from 'expo-location'
const API_KEY = '68c2aa5615728c2d0cf2b9b50f229ef9'
const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=Taiwan&appid=${API_KEY}`
const WeatherCard = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(API_ENDPOINT)
                const json = await response.json()
                setData(json)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <Card className="m-3 p-4 rounded-lg bg-blue-100 dark:bg-blue-800 shadow-none">
            <View className="flex flex-row items-center">
                <View className="block">
                    <Text className="text-md">Taiwan</Text>
                    <Text className="text-4xl font-bold">
                        {data === null ? loading && 'loading...' : Math.round(data.main.temp - 273.15) + '℃'}
                    </Text>
                </View>
                <View className="flex-1"></View>
                <SunIcon size={100} />
            </View>
        </Card>
    )
}

export default WeatherCard
