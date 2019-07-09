import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './list-item';
import UserProfile from './user-profile';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {screen: App},
  User: {screen: UserProfile}
});

export default createAppContainer(AppNavigator);

export default function App(props) {
  return (
    <View style={styles.container}>
      <ListItem navigation={props.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
