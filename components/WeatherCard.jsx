import React from 'react'
import { Card, Text, IconButton } from 'react-native-paper'
import { Image, View } from 'react-native'
import * as Location from 'expo-location'

const WeatherCard = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [location, setLocation] = React.useState(null)
    const [lat, setlat] = React.useState('-0.12807152794930338')
    const [lon, setlon] = React.useState('51.50993237466001')
    const [geocode, setGeocode] = React.useState(null)
    async function getPermissions() {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.log('Please grant location permissions')
            return
        }
        let currentLocation = await Location.getCurrentPositionAsync({})
        setLocation(currentLocation)
        setlat(currentLocation.coords.latitude)
        setlon(currentLocation.coords.longitude)
    }
    async function reverseGeocode() {
        const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
            longitude: lon,
            latitude: lat,
        })
        setGeocode(reverseGeocodeAddress.city)
        // console.log('Geocode Address:')
        // console.log(reverseGeocodeAddress)
    }
    React.useEffect(() => {
        getPermissions()
        // reverseGeocode()
    }, [])
    const API_KEY = '68c2aa5615728c2d0cf2b9b50f229ef9'
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(API_ENDPOINT)
            const json = await response.json()
            setData(json)
            console.log('---------------------')
            console.log(json)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }
    React.useEffect(() => {
        fetchData()
    }, [lat, lon])
    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
            ampm = 'AM',
            time

        if (hh > 12) {
            h = hh - 12
            ampm = 'PM'
        } else if (hh === 12) {
            h = 12
            ampm = 'PM'
        } else if (hh == 0) {
            h = 12
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm

        return time
    }
    return (
        <View className="">
            <View className="flex flex-row items-center">
                <IconButton
                    icon=""
                    size={30}
                    className="p-0"
                    onPress={() => {
                        getPermissions()
                        fetchData()
                    }}
                />
                <View className="flex-1"></View>
                <IconButton
                    icon="map-marker-circle"
                    size={30}
                    className="p-0"
                    onPress={() => {
                        getPermissions()
                        fetchData()
                    }}
                />
            </View>
            <View className="flex flex-row items-center p-6">
                <View className="block">
                    {/* <Text>latitude:&thinsp;{lat === null ? 'loading' : lat}</Text>
                    <Text>longitude:&thinsp;{lon === null ? 'loading' : lon}</Text> */}
                    <Text className="text-md mb-1">
                        Max&thinsp;{data === null ? '' : Math.round(data.main.temp_max - 273.15) + '°'}
                        &nbsp;&bull;&nbsp;Min&thinsp;
                        {data === null ? '' : Math.round(data.main.temp_min - 273.15) + '°'}
                    </Text>
                    <Text className="text-7xl font-bold ml-[-10px]">
                        {data === null ? loading && '--' : Math.round(data.main.temp - 273.15) + '℃'}
                    </Text>
                    <Text className="text-md font-bold mt-[-10px]">
                        Feels like:&thinsp;
                        {data === null ? loading && '--' : Math.round(data.main.feels_like - 273.15) + '°'}
                    </Text>
                    {/* <Text className="text-md ml-1 text-md">
                        {data === null ? loading && '' : data.weather[0].description}
                    </Text> */}
                </View>
                <View className="flex-1"></View>
                {data === null ? (
                    ''
                ) : (
                    <Image
                        className="h-[150px] w-[150px] mr-[-20px]"
                        source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                    />
                )}
            </View>
            {data === null ? (
                ''
            ) : (
                <Card className="mx-4 p-3 mb-4">
                    <Text className="text-lg font-bold">Wind</Text>
                    <Text>Speed:&thinsp;{data.wind.speed}&thinsp;m/s</Text>
                    <Text>Degrees:&thinsp;{data.wind.deg}&thinsp;deg</Text>
                </Card>
            )}
            {data === null ? (
                ''
            ) : (
                <Card className="mx-4 p-3 mb-4">
                    <Text className="text-lg font-bold">Sunrise & Sunset</Text>
                    <Text>Rise:&thinsp;{convertTimestamp(data.sys.sunrise)}</Text>
                    <Text>Set:&thinsp;{convertTimestamp(data.sys.sunset)}</Text>
                </Card>
            )}
        </View>
    )
}

export default WeatherCard
