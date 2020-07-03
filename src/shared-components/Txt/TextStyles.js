import {StyleSheet} from 'react-native';
import {hv, normalize} from 'utils/utils';
import {Colors} from 'utils/colors';
import {RTL_ENABLED} from 'utils/utils';

const styles = StyleSheet.create({
  regular: {
    fontSize: normalize(14),
    lineHeight: normalize(19),
    color: Colors.black,
    letterSpacing: hv(0.16),
    textAlign: 'left',
  },
  bold: {
    color: Colors.black,
    fontSize: normalize(16),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  extraBold: {
    color: Colors.black,
    fontSize: normalize(16),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  regularDarken: {
    fontSize: normalize(14),
    lineHeight: normalize(19),
    color: Colors.grey,
    letterSpacing: normalize(0.16),
  },
});
export default styles;

export const REGULAR = styles.regular;
export const BOLD = styles.bold;
export const REGULAR_DARKEN = styles.regularDarken;
export const EXTRA_BOLD = styles.extraBold;
