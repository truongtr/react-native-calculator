import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from './item-list';
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
      <ItemList navigation={props.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
