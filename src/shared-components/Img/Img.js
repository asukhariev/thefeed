import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {DEVICE} from 'utils/utils';
import {styles} from './ImgStyles';

const getSize = (uri) => {
  return new Promise((resolve, reject) => {
    Image.getSize(uri, (width, height) => resolve({width, height}), reject);
  });
};

const ImgComponent = ({source, style, fullWidth}) => {
  const {uri, src} = source;
  let canUpdate = true;
  const [sizes, setSizes] = useState(null);
  let imageStyle = [styles.defaultStyles, sizes];

  useEffect(() => {
    canUpdate = true;
    return () => {
      canUpdate = false;
    };
  });

  if (style.isArray) {
    imageStyle = [...imageStyle, ...style];
  } else {
    imageStyle.push(style);
  }
  if (fullWidth && sizes === null) {
    getSize(uri).then((size) => {
      if (canUpdate) {
        setSizes({
          width: DEVICE.WIDTH,
          height: (DEVICE.WIDTH * size.height) / size.width,
        });
      }
    });
  }

  if (uri) {
    return (
      <FastImage
        style={imageStyle}
        source={{
          uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }
  return <Image style={imageStyle} source={src} defaultSource={src} />;
};

export const Img = React.memo(ImgComponent);

ImgComponent.defaultProps = {
  style: {},
  source: {src: null, uri: null},
  fullWidth: false,
};

ImgComponent.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string,
      src: PropTypes.node,
    }).isRequired,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.any,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  fullWidth: PropTypes.bool,
};
