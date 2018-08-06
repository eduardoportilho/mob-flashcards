import React from 'react'
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

class EditDeck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const editedDeck = navigation.getParam('deck')
    return {
      title: editedDeck ? 'Edit Deck' : 'New Deck'
    }
  }

  state = {
    deckName: ''
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.label}> What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(deckName) => this.setState({deckName})}
            value={this.state.deckName}
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}> Save</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  label: {
    fontSize: 36,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 32,
    fontSize: 16,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
})

export default EditDeck
