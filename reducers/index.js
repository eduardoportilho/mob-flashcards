import {
  RECEIVE_DECKS,
  DECK_ADDED,
  CARD_ADDED,
} from '../actions'

function decks (state = {
  decks: undefined
}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        decks: action.decks,
      }
    case DECK_ADDED:
      return {
        decks: [...state.decks, action.deck],
      }
    case CARD_ADDED:
      return {
        decks: state.decks.map(deck => 
          deck.id === action.deckId ? {
            ...deck,
            cards: [...deck.cards, action.card]
          } : deck)
      }
    default :
      return state
  }
}

export default decks
