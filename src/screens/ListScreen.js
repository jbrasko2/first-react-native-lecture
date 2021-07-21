import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  friends = [
    { name: 'Jordan' },
    { name: 'Hillary' },
    { name: 'Jobin' },
    { name: 'Tobin' },
    { name: 'Camden' },
    { name: 'Johnny' },
    { name: 'Scuba Steve' },
  ]

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default ListScreen
