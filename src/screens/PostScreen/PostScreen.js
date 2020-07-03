import React from 'react';
import {View} from 'react-native';
import {styles} from './PostStyles';
import {PostFull} from 'components/post/PostFull/PostFull';

function PostScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      {route && route.params && route.params.item && (
        <PostFull navigation={navigation} item={route.params.item} />
      )}
    </View>
  );
}

export default PostScreen;
