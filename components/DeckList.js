import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const decks = [
  {
    key: '1',
    name: 'udacicards',
    cards: [1,2,3],
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
      <TouchableOpacity style={{paddingRight: 20}}>
        <Ionicons 
          name='ios-add'
          size={30}
          onPress={() => navigation.navigate('EditDeck')}/>
      </TouchableOpacity>
    )
  })

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({item}) => (
            <View style={styles.deckItemWrapper}>
              <Text style={styles.deckItemTitle}>{item.name}</Text>
              <Text style={styles.deckItemSubtitle}>{item.cards.length} cards</Text>
            </View>
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
