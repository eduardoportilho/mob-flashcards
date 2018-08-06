import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const decks = [
  {
    key: '1',
    name: 'udacicards',
    cards: [1,2,3]
  },
  {
    key: '2',
    name: 'new deck',
    cards: []
  },
  {
    key: '3',
    name: 'new deck 2',
    cards: []
  }
]

function DeckList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Decks</Text>
        <TouchableOpacity style={styles.headerAdd}>
          <Ionicons name='ios-add' size={30} />
        </TouchableOpacity>
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: -40,
    padding: 20,
  },
  headerAdd: {
    marginLeft: 'auto',
    paddingRight: 20,
  },
  deckItemWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  deckItemTitle: {
    fontSize: 18,
    marginBottom: 5
  },
  deckItemSubtitle: {
    fontSize: 14,
    color: 'grey'
  }
});

export default DeckList;