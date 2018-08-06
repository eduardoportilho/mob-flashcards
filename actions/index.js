import uuidv1 from "uuid/v1"
import { getDecks, saveDecks } from '../utils/API'

export const RECEIVE_DECKS = "RECEIVE_DECKS"
function recieveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const DECK_SAVED = "DECK_SAVED"
function deckSaved(deck) {
  return {
    type: DECK_SAVED,
    deck
  }
}

export const fetchDecks = () => dispatch => {
  return getDecks()
    .then(decks => dispatch(recieveDecks(decks)))
}

export const saveDeck = (name) => dispatch => {
  const deck = {
    key: uuidv1(),
    name: name,
    cards: [],
  }
  return getDecks()
    .then(decks => [...decks, deck])
    .then(decks => saveDecks(decks))
    .then(() => dispatch(deckSaved(deck)))
}
