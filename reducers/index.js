import {
  RECEIVE_DECKS,
  DECK_SAVED,
} from '../actions'

function decks (state = {
  decks: undefined
}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        decks: action.decks,
      }
    case DECK_SAVED:
      return {
        decks: [...state.decks, action.deck],
      }
    default :
      return state
  }
}

export default decks
