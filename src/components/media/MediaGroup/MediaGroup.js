import React from 'react';
import {FlatList} from 'react-native';
import {Img} from 'shared-components/Img/Img';
import {isEmpty} from 'utils/utils';

export const MEDIA_TYPES = {
  IMAGE: 'image',
};

export function MediaGroup({mediaGroup}) {
  const {type, media_item} = mediaGroup;
  function renderItem(item) {
    switch (type) {
      case MEDIA_TYPES.IMAGE: {
        return !isEmpty(item.src) ? (
          <Img source={{uri: item.src}} fullWidth style={[]} />
        ) : null;
      }
      default: {
        return null;
      }
    }
  }
  return (
    <FlatList
      horizontal
      data={media_item}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
