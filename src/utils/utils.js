import {Dimensions, Platform, PixelRatio, I18nManager} from 'react-native';

export const DEVICE = {
  HEIGHT: Math.round(Dimensions.get('window').height),
  WIDTH: Math.round(Dimensions.get('window').width),
};
const scaleX = DEVICE.WIDTH / (Platform.OS === 'ios' ? 375 : 360);

export const RTL_ENABLED = I18nManager.isRTL;

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    (DEVICE.HEIGHT === 812 ||
      DEVICE.WIDTH === 812 ||
      DEVICE.HEIGHT === 896 ||
      DEVICE.WIDTH === 896)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export const STATUS_BAR_HEIGHT = {
  NORMAL: Platform.select({
    ios: ifIphoneX(44, 20),
    android: 0,
    default: 0,
  }),
  SAFE: Platform.select({
    ios: ifIphoneX(30, 20),
    android: 0,
    default: 0,
  }),
};
export const BOTTOM_SPACE = isIphoneX() ? 34 : 0;
export const normalize = (size) =>
  Math.round(PixelRatio.roundToNearestPixel(size));
export const hv = (size) =>
  scaleX > 1 ? Math.round(size) : Math.round(size * scaleX);

export const isEmpty = (str) => {
  return !str || str.length === 0;
};
