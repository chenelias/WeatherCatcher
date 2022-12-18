import React from 'react'
import { Card, Title, Paragraph, Text } from 'react-native-paper'
import { Image } from 'react-native'
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
        <Card className="m-3 p-2 rounded-md bg-blue-100">
            <Text className="font-bold text-md">weather in Taiwan</Text>
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default WeatherCard
