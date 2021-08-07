import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import TasksContainer from './src/components/TasksEpic/TasksContainer';
import Header from './src/components/_shared/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TasksContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingLeft:20,
    paddingRight:20
  },
});
