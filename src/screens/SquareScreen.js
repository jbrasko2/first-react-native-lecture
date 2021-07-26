import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === { type: 'change_red' || 'grean' || 'blue', payload: 15 || -15 }

  switch (action.type) {
    case 'change_red':
      // never going to do:
      // state.red = state.red - 15
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
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
        onIncrease={() => dispatch({ type: 'change_red', payload: 15 })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -15 })}
      />
      <ColorAdjuster
        color='Green'
        onIncrease={() => dispatch({ type: 'change_green', payload: 15 })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -15 })}
      />
      <ColorAdjuster
        color='Blue'
        onIncrease={() => dispatch({ type: 'change_blue', payload: 15 })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -15 })}
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
