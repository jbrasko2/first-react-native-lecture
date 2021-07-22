import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageCard from './components/ImageCard'

const ImageScreen = () => {
  return (
    <View>
      <ImageCard />
      <ImageCard />
      <ImageCard />
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
