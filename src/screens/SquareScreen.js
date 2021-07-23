import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === { colorToChange: 'red' || 'grean' || 'blue', amount: 15 || -15 }

  switch (action.colorToChange) {
    case 'red':
      // never going to do:
      // state.red = state.red - 15
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View>
      <ColorAdjuster
        color='Red'
        onIncrease={() => dispatch({ colorToChange: 'red', amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -15 })}
      />
      <ColorAdjuster
        color='Green'
        onIncrease={() => dispatch({ colorToChange: 'green', amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -15 })}
      />
      <ColorAdjuster
        color='Blue'
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -15 })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>
        rgb({red}, {green}, {blue})
      </Text>
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})
