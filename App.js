import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import EditDeck from './components/EditDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'


const RootStack = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  EditDeck: {
    screen: EditDeck,
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz,
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
