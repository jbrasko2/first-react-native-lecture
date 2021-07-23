import React from 'react'
import { View, Text, Button } from 'react-native'

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  )
}

export default ColorAdjuster
