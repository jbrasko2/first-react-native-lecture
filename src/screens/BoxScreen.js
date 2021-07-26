import React, { Children } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { floor } from 'react-native-reanimated'

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>App</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.boxOneStyle} />
        <View style={styles.boxTwoStyle} />
        <View style={styles.boxThreeStyle} />
      </View>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  headerStyle: {
    height: 100,
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxOneStyle: {
    height: 75,
    width: 100,
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(255, 200, 200)'
  },
  boxTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    height: 75,
    width: 100,
    top: 75,
    backgroundColor: 'rgb(200, 255, 200)'
  },
  boxThreeStyle: {
    height: 75,
    width: 100,
    borderWidth: 3,
    borderColor: 'purple',
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(200, 200, 255)'
  },
})
