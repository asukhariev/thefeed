import {StyleSheet} from 'react-native';
import {hv, DEVICE} from 'utils/utils';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: 'green',
  },
});

export const image = {
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: DEVICE.width,
    aspectRatio: 1, // Your aspect ratio
  },
};

export const video = {
  container: {
    flex: 1,
    width: '100%',
    height: hv(20),
    marginVertical: hv(20),
    backgroundColor: 'purple',
  },
};
