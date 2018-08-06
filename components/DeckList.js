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
        <FlatList
          data={decks}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Deck', {deck: item})}
            >
              <View style={styles.deckItemWrapper}>
                <Text style={styles.deckItemTitle}>{item.name}</Text>
                <Text style={styles.deckItemSubtitle}>{item.cards.length} cards</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
