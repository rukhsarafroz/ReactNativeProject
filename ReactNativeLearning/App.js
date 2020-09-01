/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  FlatList,
} from 'react-native';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {key: Math.random().toString(), value: enteredGoal},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Course Goals"
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(goalItem) => (
          <View style={styles.listItems}>
            <Text>{goalItem.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
