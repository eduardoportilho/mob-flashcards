import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'MobFlashcards:decks'

export const getDecks = () => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      if (!results)
        return []
      return JSON.parse(results)
    })
)

export const saveDecks = (decks) => (
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
)
