import React, {createRef} from 'react';
import VideoComponent from 'react-native-video';
import PropTypes from 'prop-types';
import {styles} from './VideoStyles';

function VideoWrapper({src, poster}) {
  const player = createRef(null);
  const handleVideoError = (error) => {
    console.log('error: ', error);
  };

  const handleBuffer = (res) => {
    console.log('buffer: ', res);
  };

  const handleOnReadyForDisplay = () => {
    console.log('On load fired!');
    // player.current.presentFullscreenPlayer();
  };

  return (
    <>
      <VideoComponent
        poster={poster}
        posterResizeMode="cover"
        source={{uri: src}} // Can be a URL or a local file.
        ref={player}
        onReadyForDisplay={handleOnReadyForDisplay}
        onBuffer={handleBuffer}
        onError={handleVideoError}
        style={styles.container}
        controls={true}
        paused
      />
    </>
  );
}

export const Video = VideoWrapper;

Video.propTypes = {
  src: PropTypes.string,
  poster: PropTypes.string,
};
