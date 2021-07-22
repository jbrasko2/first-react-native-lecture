import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageCard = ({ title, imageSrc }) => {
  return (
    <View>
      <Image source={imageSrc} />
      <Text>{title}</Text>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({})
