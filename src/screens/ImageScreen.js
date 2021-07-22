import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default ImageScreen
