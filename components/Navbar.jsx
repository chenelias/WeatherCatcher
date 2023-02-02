import React from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import MainScreen from './MainScreen'
import SearchScreen from './SearchScreen'
const Navbar = () => {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        {
            key: 'home',
            title: 'Weather',
            focusedIcon: 'weather-partly-snowy-rainy',
            unfocusedIcon: 'weather-partly-snowy-rainy',
        },
        { key: 'search', title: 'Favorite', focusedIcon: 'star' },
    ])

    const renderScene = BottomNavigation.SceneMap({
        home: MainScreen,
        search: SearchScreen,
    })

    return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
}
export default Navbar
