import {StyleSheet} from 'react-native';
import {hv, DEVICE} from 'utils/utils';
import {Colors} from 'utils/colors';
import {RTL_ENABLED} from 'utils/utils';

export const styles = StyleSheet.create({
  container: {
    width: DEVICE.WIDTH,
    height: (DEVICE.WIDTH / 9) * 6,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
