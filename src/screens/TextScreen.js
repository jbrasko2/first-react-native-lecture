import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [currentText, setCurrentText] = useState('')
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={currentText}
        onChangeText={newValue => setCurrentText(newValue)}
      />
      <Text>My name is {currentText}</Text>
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
