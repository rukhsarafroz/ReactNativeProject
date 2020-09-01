/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Course Goals" style={styles.textInput} />
        <Button title="ADD" />
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
