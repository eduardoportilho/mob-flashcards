import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const decks = [
  {
    key: '1',
    name: 'udacicards',
    cards: [
      {
        question: 'How much is 1 + 1?',
        answer: '2',
      },
      {
        question: 'How much is 2 + 3?',
        answer: '5',
      }
    ],
  },
  {
    key: '2',
    name: 'new deck',
    cards: [],
  },
  {
    key: '3',
    name: 'new deck 2',
    cards: [],
  },
]

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

  render() {
    const { navigation } = this.props
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

export default DeckList
