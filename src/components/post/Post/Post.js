import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Txt} from 'shared-components/Txt/Txt';
import {MediaGroup} from 'components/media/MediaGroup/MediaGroup';
import {dateHandler} from 'utils/dateHandler';
import {ROUTE_NAMES} from 'app/Routes/Routes';
import {LINK_STYLES, VIDEO_STYLES} from './PostStyles';

export const POST_ACCENT_TYPE = {
  LINK: 'link',
  VIDEO: 'video',
};

const ACCENT_TYPE_STYLES_MAPPER = {
  [POST_ACCENT_TYPE.LINK]: LINK_STYLES,
  [POST_ACCENT_TYPE.VIDEO]: VIDEO_STYLES,
};

function PostComponent({item, navigation, containerStyle}) {
  const {type, title, summary, published, media_group} = item;
  const accentTypeStyles = ACCENT_TYPE_STYLES_MAPPER[type.value];
  return (
    <TouchableOpacity
      style={[accentTypeStyles.container, containerStyle]}
      onPress={() => navigation.navigate(ROUTE_NAMES.POST, {item})}>
      {media_group &&
        media_group.length > 0 &&
        media_group.map((mediaItem, index) => (
          <MediaGroup mediaGroup={mediaItem} key={index.toString()} />
        ))}
      {title !== '' && <Txt style={accentTypeStyles.title} text={title} />}
      {summary !== '' && (
        <Txt style={accentTypeStyles.summary} text={summary} />
      )}
      {published !== '' && (
        <Txt
          style={accentTypeStyles.date}
          text={dateHandler.published(published)}
        />
      )}
    </TouchableOpacity>
  );
}

export const Post = React.memo(PostComponent);

PostComponent.defaultProps = {
  containerStyle: {},
};

PostComponent.propTypes = {
  item: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  containerStyle: PropTypes.shape({}),
};
