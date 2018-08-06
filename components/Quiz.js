import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

class Quiz extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Quiz'
    }
  }

  state = {
    questionIndex: 0,
    isQuestionShowing: true
  }

  toggleQuestionAnswer = () => {
    this.setState(state => ({
      isQuestionShowing: !state.isQuestionShowing
    }))
  }

  onCorrectPress = () => {
    const deck = this.props.navigation.getParam('deck')
    const { questionIndex } = this.state
    if (questionIndex < deck.cards.length - 1) {
      this.setState(state => ({
        questionIndex: state.questionIndex + 1,
      }))
    }
  }

  onIncorrectPress = () => {
    const deck = this.props.navigation.getParam('deck')
    const { questionIndex } = this.state
    if (questionIndex < deck.cards.length - 1) {
      this.setState(state => ({
        questionIndex: state.questionIndex + 1,
      }))
    }
  }

  render() {
    const deck = this.props.navigation.getParam('deck')
    const { questionIndex, isQuestionShowing } = this.state
    const { question, answer } = deck.cards[questionIndex]

    return (
      <View style={styles.container}>

        <View style={styles.conterContainer}>
          <Text style={styles.counterLabel}>
            {questionIndex + 1}/{deck.cards.length}
          </Text>
        </View>

        { isQuestionShowing ? (
          <View style={styles.questionContainer}>
            <Text style={styles.questionLabel}>
              {question}
            </Text>
            <TouchableOpacity
              style={styles.linkBtn}
              onPress={this.toggleQuestionAnswer}
            >
              <Text style={styles.linkBtnText}>
                Answer
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionLabel}>
              {answer}
            </Text>
            <TouchableOpacity
              style={styles.linkBtn}
              onPress={this.toggleQuestionAnswer}
            >
              <Text style={styles.linkBtnText}>
                Question
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btn, styles.btnSecondary]}
            onPress={this.onCorrectPress}
          >
            <Text style={styles.btnText}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnPrimary]}
            onPress={this.onIncorrectPress}
          >
            <Text style={styles.btnText}>
              Incorrect
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  conterContainer: {
    alignSelf: 'baseline',
  },
  counterLabel: {
    fontSize: 18,
  },
  questionContainer: {
    alignSelf: 'center',
  },
  questionLabel: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  linkBtn: {
    alignSelf: 'center',
  },
  linkBtnText: {
    fontSize: 18,
    color: 'darkred',
  },
  btnContainer: {
    marginBottom: 30,
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
    color: 'white',
  },
  btnPrimary: {
    backgroundColor: 'green',
  },
  btnSecondary: {
    backgroundColor: 'red',
  },
})

export default Quiz
