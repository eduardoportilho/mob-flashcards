import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import store from './store'
import DeckList from './components/DeckList'
import EditDeck from './components/EditDeck'
import EditCard from './components/EditCard'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import QuizScore from './components/QuizScore'

const RootStack = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  EditDeck: {
    screen: EditDeck,
  },
  EditCard: {
    screen: EditCard,
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz,
  },
  QuizScore: {
    screen: QuizScore,
  },
},
{
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <RootStack />
        </View>
      </Provider>
    )
  }
}
