import React from 'react';
import {images} from 'assets/images';
import {Img} from 'shared-components/Img/Img';
import {DEVICE} from 'utils/utils';

export const options = {
  title: '',
  headerTitle: (props) => (
    <Img source={{src: images.logo}} style={{width: DEVICE.WIDTH / 3}} />
  ),
};
