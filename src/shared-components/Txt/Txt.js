import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {REGULAR, BOLD, REGULAR_DARKEN, EXTRA_BOLD} from './TextStyles';

export const TXT_ACCENT_TYPES = {
  REGULAR: 'REGULAR',
  BOLD: 'BOLD',
  REGULAR_DARKEN: 'REGULAR_DARKEN',
  EXTRA_BOLD: 'EXTRA_BOLD',
};

export const ACCENT_TYPES_AND_STYLES_MAPPER = {
  [TXT_ACCENT_TYPES.REGULAR]: REGULAR,
  [TXT_ACCENT_TYPES.BOLD]: BOLD,
  [TXT_ACCENT_TYPES.REGULAR_DARKEN]: REGULAR_DARKEN,
  [TXT_ACCENT_TYPES.EXTRA_BOLD]: EXTRA_BOLD,
};

export function Txt({accentType, children, style, text, multiline, onPress}) {
  let accentTypeStyles = [ACCENT_TYPES_AND_STYLES_MAPPER[accentType]];
  if (style){
    if (style.isArray) {
      accentTypeStyles = [...accentTypeStyles, ...style];
    } else {
      accentTypeStyles.push(style);
    }
  }
  return (
    <Text
      onPress={onPress}
      allowFontScaling={false}
      style={accentTypeStyles}
      multiline={multiline}>
      {children || text}
    </Text>
  );
}

Txt.defaultProps = {
  children: '',
  style: {},
  accentType: TXT_ACCENT_TYPES.REGULAR,
  text: '',
  multiline: true,
};

Txt.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  style: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  accentType: PropTypes.string,
  text: PropTypes.string,
  multiline: PropTypes.bool,
  onPress: PropTypes.func
};
