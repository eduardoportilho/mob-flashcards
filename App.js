import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import DeckList from './components/DeckList'
import { Constants } from 'expo'

function AppStatusBar (props) {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar />
        <DeckList />
      </View>
    );
  }
}
