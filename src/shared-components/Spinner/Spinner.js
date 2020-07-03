import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';
import {GENERIC_STYLES, FILL_STYLES} from './SpinnerStyles';

export const SPINNER_ACCENT_TYPE = {
  GENERIC: 'GENERIC',
  FILL: 'FILL',
};

const ACCENT_TYPE_STYLES_MAPPER = {
  [SPINNER_ACCENT_TYPE.GENERIC]: GENERIC_STYLES,
  [SPINNER_ACCENT_TYPE.FILL]: FILL_STYLES,
};

export function Spinner({accentType}) {
  const accentTypeStyles = ACCENT_TYPE_STYLES_MAPPER[accentType];
  return (
    <View style={accentTypeStyles.container}>
      <ActivityIndicator />
    </View>
  );
}

Spinner.defaultProps = {
  accentType: SPINNER_ACCENT_TYPE.GENERIC,
};

Spinner.proTypes = {
  accentType: PropTypes.string,
};
