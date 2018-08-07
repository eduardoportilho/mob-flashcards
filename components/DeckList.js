import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading} from 'expo'
import { fetchDecks } from '../actions'

class DeckList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Decks',
    headerRight: (
      <TouchableOpacity
        style={{paddingRight: 20}}
        onPress={() => navigation.navigate('EditDeck')}
      >
        <Ionicons 
          name='ios-add'
          size={30}/>
      </TouchableOpacity>
    )
  })

  componentDidMount() {
    this.props.fetchDecks()
  }

  render() {
    const { navigation, decks } = this.props

    if (!decks) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        { decks.length === 0 ? (
          <View style={styles.innerContainer}>
            <Text style={styles.label}>No decks yet...</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditDeck')}
                style={styles.btn}
              >
                <Text style={styles.btnText}>Create One</Text>
              </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={decks}
            keyExtractor={deck => {
              return deck.id
            }}
            renderItem={({item: deck}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Deck', { deck })}
              >
                <View style={styles.deckItemWrapper}>
                  <Text style={styles.deckItemTitle}>{deck.name}</Text>
                  <Text style={styles.deckItemSubtitle}>{deck.cards.length} cards</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: 'blue',
  },
  btnText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  deckItemWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  deckItemTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  deckItemSubtitle: {
    fontSize: 14,
    color: 'grey',
  }
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
)(DeckList)
