import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const reactSymbol = "https://facebook.github.io/react-native/img/favicon.png";

const sampleData = [
  {
    fromUser: {
      name: "Truc",
      time: 'Tue May 15 2012',
    },
    content: {
      caption: "Just some sample text over here dont mind me.",
      image: reactSymbol,
    },
  },
  {
    fromUser: {
      name: "Tung",
      time: 'Tue May 15 2012',
    },
    content: {
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: reactSymbol,
    },
  },
  {
    fromUser: {
      name: "Tung",
      time: 'Tue May 15 2012',
    },
    content: {
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: reactSymbol,
    },
  },
]

function UserDisplay(props){
  const _onPress = ()=>{props.navigation.navigate('User')}

  return (
    <TouchableOpacity style={styles.userDisplay} onPress={_onPress}>
      <View style={styles.userProfilePictureContainer}>
        <Image style={styles.circleProfilePicture} source={{uri: reactSymbol}}/>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{props.user.name}</Text>
        <Text>{props.user.time}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default function ListItem(props) {
  return (
    <View style={styles.listItemContainer}>
      <FlatList
        data={sampleData}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item}) => (
            <View>
              <UserDisplay user={item.fromUser} navigation={props.navigation}/>
              <Text>{item.content.caption}</Text>
              <Image
                style={{ width: '100%', height: 200 }}
                resizeMode={'cover'}
                source={{uri: item.content.image}}
              />
            </View>
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 20,
  },
  circleProfilePicture: {
    borderRadius: 64/2,
    width: 64,
    height: 64,
    flex: 1,
  },
  userDisplay: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  userProfilePictureContainer: {
    flex: 1,
  },
  userInfo: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
  },
});
