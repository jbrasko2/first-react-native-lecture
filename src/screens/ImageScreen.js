import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageCard from '../components/ImageCard'

const ImageScreen = () => {
  return (
    <View>
      <ImageCard
        title='Forest'
        style={styles.textStyle}
        imageSrc={require('../../assets/forest.jpg')}
      />
      <ImageCard
        title='Beach'
        style={styles.textStyle}
        imageSrc={require('../../assets/beach.jpg')}
      />
      <ImageCard
        title='Mountain'
        style={styles.textStyle}
        imageSrc={require('../../assets/mountain.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
})

export default ImageScreen
