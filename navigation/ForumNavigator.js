import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PostsListScreen from '../screens/PostsListScreen';
import Colors from '../constants/Colors';
import PostDetailScreen from '../screens/PostDetailScreen';

const PostsNavigator = createStackNavigator(
  {
    Posts: PostsListScreen,
    PostDetail: PostDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }
  }
);

export default createAppContainer(PostsNavigator);
