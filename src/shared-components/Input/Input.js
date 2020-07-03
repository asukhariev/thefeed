import React from 'react';
import {TextInput, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './InputStyles';
import {Colors} from 'utils/colors';

export const INPUT_ACCENT_TYPE = {
  GENERIC: 'GENERIC',
  SEARCH: 'SEARCH',
};

export const KEYBOARD_TYPES = {
  DEFAULT: 'default',
  NUMBER_PAD: 'number-pad',
};

export const Input = ({
  onChangeText,
  placeholder,
  keyboardType,
  containerStyle,
  secureTextEntry,
  inputStyle,
}) => (
  <Animated.View style={[styles.wrapper, containerStyle]}>
    <TextInput
      keyboardType={keyboardType}
      style={[styles.textInput, inputStyle]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={Colors.inputPlaceholder}
      secureTextEntry={secureTextEntry}
    />
  </Animated.View>
);

Input.defaultProps = {
  keyboardType: KEYBOARD_TYPES.DEFAULT,
  accentType: INPUT_ACCENT_TYPE.GENERIC,
};

Input.propTypes = {
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  secureTextEntry: PropTypes.bool,
  inputStyle: PropTypes.shape({}),
};
