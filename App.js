import React from 'react'
import { createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'


const RootStack = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  DeckDetails: {
    screen: DeckDetails,
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
