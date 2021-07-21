import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  friends = [
    { name: 'Jordan', age: 30 },
    { name: 'Hillary', age: 29 },
    { name: 'Jobin', age: 42 },
    { name: 'Tobin', age: 12 },
    { name: 'Camden', age: 28 },
    { name: 'Johnny', age: 45 },
    { name: 'Scuba Steve', age: 50 },
  ]

  return (
    <FlatList
      horizontal //horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
})

export default ListScreen
