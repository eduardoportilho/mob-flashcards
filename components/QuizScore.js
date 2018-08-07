import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class QuizScore extends React.Component {
  static navigationOptions = {
    title: 'Quiz Result',
    headerLeft: null,
  }

  onTryAgain = () => {
    const { deck } = this.props.navigation.getParam('score')
    this.props.navigation.replace('Quiz', {deck})
  }

  onBackToDeck = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { percent } = this.props.navigation.getParam('score')

    return (
      <View style={styles.container}>

        <Text style={styles.label}>
          You got {percent} % of the cards correctly.
        </Text>
        <TouchableOpacity
          style={[styles.btn, styles.btnPrimary]}
          onPress={this.onTryAgain}
        >
          <Text style={[styles.btnText, styles.btnPrimaryText]}>
            Try Again?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.btnSecondary]}
          onPress={this.onBackToDeck}
        >
          <Text style={[styles.btnText, styles.btnSecondaryText]}>
            Back to Deck
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 22,
    textAlign: 'center',
  },
  btnPrimary: {
    backgroundColor: 'black',
  },
  btnPrimaryText: {
    color: 'white',
  },
  btnSecondary: {
    backgroundColor: 'white',
    borderColor: 'black'
  },
  btnSecondaryText: {
    color: 'black',
  },
})

export default QuizScore
