import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import EditDeck from './components/EditDeck'


const RootStack = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  EditDeck: {
    screen: EditDeck,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootStack />
      </View>
    )
  }
}
