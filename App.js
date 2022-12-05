import React, { useState, CSSProperties } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function App() {
  const [selected, setSelected] = React.useState("");
  const [num_of_balls, setNumOfBalls] = React.useState(0);
  const [num_of_games, setNumOfGames] = React.useState(0);
  const data = [
    { value: '8-ball', label: '8-ball' },
    { value: 'Straight-Pool', label: 'Straight Pool' },
    { value: 'x-balls', label: 'x-balls' }
  ]
  return (
    <>
      <View>
        <Text style={styles.baseText}>Ghost Tracker App</Text>
        <Text>Choose which game:</Text>
        <SelectList
          setSelected={(val) => { setSelected(val); setNumOfBalls(0); setNumOfGames(0)} }
          data={data}
          save="value"
      />
      { selected === '8-ball' &&
        <TextInput
          style={{height: 10, padding: 10}}
          placeholder="How many games?"
          onChangeText={text => setNumOfGames(text)}
          defaultValue={num_of_games}
        />  }
      { selected !== "" && selected !== '8-ball' &&
        <TextInput
          style={{height: 10, padding: 10}}
          placeholder="How many balls?"
          onChangeText={text => setNumOfBalls(text)}
          defaultValue={num_of_balls}
        /> }
      </View>

      <View>
        {selected !== "" &&
          <>
            <Text>Game: {selected}</Text>
            { selected !== '8-ball' &&
              <Text>Number of balls: {num_of_balls}</Text>
        }
            { selected === '8-ball' &&
              <Text>Number of games: {num_of_games}</Text>
            }
        </>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 100,
  }
});

