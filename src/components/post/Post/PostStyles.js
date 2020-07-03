import {StyleSheet} from 'react-native';
import {hv, normalize} from 'utils/utils';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: hv(16),
    paddingHorizontal: hv(16),
    marginBottom: hv(16),
  },
  title: {
    fontSize: normalize(27),
    lineHeight: normalize(40),
    fontWeight: '500',
    marginTop: hv(8),
  },
  summary: {
    fontSize: normalize(16),
    lineHeight: normalize(18),
    marginTop: hv(8),
    fontWeight: '400',
  },
  date: {
    fontSize: normalize(14),
    lineHeight: normalize(16),
  },
});

export const LINK_STYLES = {
  container: styles.container,
  title: styles.title,
  summary: styles.summary,
  date: styles.date,
};

export const VIDEO_STYLES = {
  container: styles.container,
  title: styles.title,
  summary: styles.summary,
  date: styles.date,
};
