import {StyleSheet} from 'react-native';
import {hv} from 'utils/utils';
import {Colors} from 'utils/colors';
import {RTL_ENABLED} from 'utils/utils';
export const INPUT_DEFAULT_HEIGHT = hv(60);

export const styles = StyleSheet.create({
  textInput: {
    height: INPUT_DEFAULT_HEIGHT,
    flex: 1,
    paddingHorizontal: hv(16),
    textAlign: RTL_ENABLED ? 'right' : 'left',
    color: Colors.black,
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
