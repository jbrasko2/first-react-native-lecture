import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize='none'
        autoCorrect={false}
      />
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
