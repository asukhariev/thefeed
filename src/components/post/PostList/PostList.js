import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {Spinner} from 'shared-components/Spinner/Spinner';
import {Post} from 'components/post/Post/Post';
import {Input} from 'shared-components/Input/Input';
import {postApi, POST_TYPES} from 'api/postApi';
import {INPUT_DEFAULT_HEIGHT} from 'shared-components/Input/InputStyles';
import {isEmpty} from 'utils/utils';
import {styles} from './PostListStyles';

export function PostList({navigation}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY] = useState(new Animated.Value(0));

  const handleRequest = async () => {
    const [links, videos] = await Promise.all([
      postApi.getPostType(POST_TYPES.LINK),
      postApi.getPostType(POST_TYPES.VIDEO),
    ]);
    setData([...videos.data.entry, ...links.data.entry]);
    // setData([...links.data.entry, ...videos.data.entry]);

    setIsLoading(false);
  };

  useEffect(() => {
    handleRequest();
  }, []);

  const handleKey = (item, index) => {
    return item.id
      ? `${item.id.toString()}${index.toString()}`
      : `Video_key_${index.toString()}`;
  };

  const animateInput = () => {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 10,
      transform: [
        {
          translateY: scrollY.interpolate({
            inputRange: [0, INPUT_DEFAULT_HEIGHT],
            outputRange: [0, -INPUT_DEFAULT_HEIGHT],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  const handleFilter = (str) => {
    let newFilteredData = [];
    newFilteredData = data.filter((item) => item.title.includes(str));
    setSearchStr(str);
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Input
        placeholder="Search"
        containerStyle={animateInput()}
        onChangeText={handleFilter}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Animated.FlatList
          data={!isEmpty(searchStr) ? filteredData : data}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          style={styles.container}
          horizontal={false}
          removeClippedSubviews
          renderItem={({item, index}) => (
            <Post
              item={item}
              navigation={navigation}
              containerStyle={index === 0 ? styles.firstItem : null}
            />
          )}
          keyExtractor={handleKey}
        />
      )}
    </>
  );
}
