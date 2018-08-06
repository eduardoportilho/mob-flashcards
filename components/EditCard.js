import React from 'react'
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

class EditCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const editedCard = navigation.getParam('card')
    return {
      title: editedCard ? 'Edit Card' : 'New Card'
    }
  }

  state = {
    question: '',
    answer: ''
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.label}>Question:</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            style={styles.input}
          />

          <Text style={styles.label}>Answer:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
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
    paddingTop: 40,
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
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

export default EditCard
