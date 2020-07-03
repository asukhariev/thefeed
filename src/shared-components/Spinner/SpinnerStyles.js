import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  //GENERIC
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  //FILL
  containerFill: {
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
});

export const GENERIC_STYLES = {
  container: styles.container,
};

export const FILL_STYLES = {
  container: styles.containerFill,
};
