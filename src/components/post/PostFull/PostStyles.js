import {StyleSheet} from 'react-native';
import {hv, normalize} from 'utils/utils';
export const styles = StyleSheet.create({
  // WEBVIEW STYLING
  webViewContainer: {
    flex: 1,
    height: '100%',
  },
  webView: {
    flex: 1,
  },
  // VIDEO VIEW STYLING
  videoViewContainer: {
    flex: 1,
    width: '100%',
  },
  videoInfoContainer: {
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
  container: styles.webViewContainer,
  webView: styles.webView,
  title: styles.title,
  summary: styles.summary,
  date: styles.date,
};

export const VIDEO_STYLES = {
  container: styles.videoViewContainer,
  infoContainer: styles.videoInfoContainer,
  title: styles.title,
  summary: styles.summary,
  date: styles.date,
};
