import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, change) => {
    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
        return
      } else {
        setRed(red + change)
      }
    }
    if (color === 'green') {
      if (green + change > 255 || green + change < 0) {
        return
      } else {
        setGreen(green + change)
      }
    }
    if (color === 'blue') {
      if (blue + change > 255 || blue + change < 0) {
        return
      } else {
        setBlue(blue + change)
      }
    }
  }

  return (
    <View>
      <ColorAdjuster
        color='Red'
        onIncrease={() => setColor('red', 15)}
        onDecrease={() => setColor('red', -15)}
      />
      <ColorAdjuster
        color='Green'
        onIncrease={() => setColor('green', 15)}
        onDecrease={() => setColor('green', -15)}
      />
      <ColorAdjuster
        color='Blue'
        onIncrease={() => setColor('blue', 15)}
        onDecrease={() => setColor('blue', -15)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>
        rbg({red}, {green}, {blue})
      </Text>
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})
