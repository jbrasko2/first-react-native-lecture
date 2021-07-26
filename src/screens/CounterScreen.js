import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_count':
      return { ...state, count: state.count + action.payload }
    case 'decrease_count':
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <View>
      <Button
        title='Increase'
        onPress={() => dispatch({ type: 'increase_count', payload: 1 })}
      />
      <Button
        title='Descrease'
        onPress={() => dispatch({ type: 'decrease_count', payload: 1 })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})
