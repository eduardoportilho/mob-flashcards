import uuidv1 from "uuid/v1"
import { getDecks, saveDecks } from '../utils/API'

export const RECEIVE_DECKS = "RECEIVE_DECKS"
function recieveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const DECK_ADDED = "DECK_ADDED"
function deckAdded(deck) {
  return {
    type: DECK_ADDED,
    deck
  }
}

export const CARD_ADDED = "CARD_ADDED"
function cardAdded(deckId, card) {
  return {
    type: CARD_ADDED,
    deckId, 
    card,
  }
}

export const fetchDecks = () => dispatch => {
  return getDecks()
    .then(decks => dispatch(recieveDecks(decks)))
}

export const addDeck = (name) => dispatch => {
  const deck = {
    key: uuidv1(),
    name,
    cards: [],
  }
  return getDecks()
    .then(decks => [...decks, deck])
    .then(decks => saveDecks(decks))
    .then(() => dispatch(deckAdded(deck)))
}

export const addCard = (question, answer, deckId) => dispatch => {
  const card = {
    question,
    answer,
  }
  return getDecks()
    .then(decks => decks.map(deck => (
      deck.id === deckId ? {
        ...deck,
        cards: [...deck.cards, card]
      } : deck
    )))
    .then(decks => saveDecks(decks))
    .then(() => dispatch(cardAdded(deckId, card)))
}
