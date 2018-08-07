import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'
import { fetchDecks } from '../actions'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam('deck')
    return {
      title: deck.name
    }
  }

  componentDidMount() {
    this.props.fetchDecks()
  }

  getDeck = () => {
    const { navigation, decks } = this.props
    const deckFromParams = navigation.getParam('deck')
    return decks.find(deck => deck.id === deckFromParams.id)
  }

  onAddCard = () => {
    const deck = this.getDeck()
    this.props.navigation.navigate('EditCard', { deck })
  }

  onStartQuiz = () => {
    const deck = this.getDeck()
    this.props.navigation.navigate('Quiz', {deck})
  }

  render() {
    const { decks } = this.props

    if (!decks) {
      return <AppLoading />
    }

    const deck = this.getDeck()

    const quizDisabled = deck.cards.length === 0
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.deckTitle}>{deck.name}</Text>
          <Text style={styles.deckSubtitle}>{deck.cards.length} cards</Text>
        </View>

        <TouchableOpacity
          style={[styles.btn, styles.btnSecondary]}
          onPress={this.onAddCard}
        >
          <Text style={[styles.btnText, styles.btnSecondaryText]}>
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, quizDisabled ? styles.btnDisabled : styles.btnPrimary]}
          onPress={this.onStartQuiz}
          disabled={quizDisabled}
        >
          <Text style={[styles.btnText, quizDisabled ? styles.btnDisabledText : styles.btnPrimaryText]}>
            Start Quiz
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
  labelContainer: {
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  deckTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  deckSubtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'grey',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 32,
    fontSize: 16,
    marginBottom: 10,
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
  btnDisabled: {
    backgroundColor: 'lightgrey',
  },
  btnDisabledText: {
    color: 'white',
  },
})

function mapStateToProps ({ decks }) {
  return {
    decks,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(fetchDecks()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deck)
