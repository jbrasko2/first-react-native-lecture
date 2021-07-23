import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Button title='Increase' onPress={() => setCount(count + 1)} />
      <Button title='Descrease' onPress={() => setCount(count +-1)} />
      <Text>Current Count: {count}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})
