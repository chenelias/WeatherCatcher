import { StatusBar } from 'expo-status-bar'
import Navbar from './components/Navbar'
import { Provider as PaperProvider } from 'react-native-paper'
import { View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar'

export default function App() {
    NavigationBar.setPositionAsync('absolute')
    NavigationBar.setBackgroundColorAsync('#ffffff00')
    return (
        <PaperProvider>
            <Navbar />
            <StatusBar style="auto" />
        </PaperProvider>
    )
}
