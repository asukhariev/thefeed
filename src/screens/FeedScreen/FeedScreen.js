import React from 'react';
import {SafeAreaView} from 'react-native';
import {PostList} from 'components/post/PostList/PostList';
import {commonStyles} from 'utils/styles';

function FeedScreen({navigation}) {
  return (
    <SafeAreaView style={commonStyles.safeContainer}>
      <PostList navigation={navigation} />
    </SafeAreaView>
  );
}

export default FeedScreen;
