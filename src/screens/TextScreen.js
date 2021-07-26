import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [currentText, setCurrentText] = useState('')
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={currentText}
        onChangeText={newValue => setCurrentText(newValue)}
      />
      {currentText.length > 5
      ? <Text>Thank you</Text>
      : <Text>Password must be longer than 5 characters</Text>}
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})
