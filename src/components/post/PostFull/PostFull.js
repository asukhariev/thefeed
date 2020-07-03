import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Txt} from 'shared-components/Txt/Txt';
import {Spinner, SPINNER_ACCENT_TYPE} from 'shared-components/Spinner/Spinner';
import {dateHandler} from 'utils/dateHandler';
import {WebView} from 'react-native-webview';
import {Video} from 'shared-components/Video/Video';
import {isEmpty} from 'utils/utils';
import {LINK_STYLES, VIDEO_STYLES} from './PostStyles';

export const POST_ACCENT_TYPE = {
  LINK: 'link',
  VIDEO: 'video',
};

const ACCENT_TYPE_STYLES_MAPPER = {
  [POST_ACCENT_TYPE.LINK]: LINK_STYLES,
  [POST_ACCENT_TYPE.VIDEO]: VIDEO_STYLES,
};

function PostComponent({item}) {
  const {type, title, summary, published, media_group, content} = item;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (type.value !== POST_ACCENT_TYPE.LINK) {
      setLoading(false);
    }
  }, [type.value]);
  if (!type) {
    return null;
  }
  const accentTypeStyles = ACCENT_TYPE_STYLES_MAPPER[type.value];
  const Wrapper = type.value === POST_ACCENT_TYPE.VIDEO ? ScrollView : View;
  const changeTextPadding =
    'document.querySelector(".block-head").style.padding = "0 20px 0 20px";';
  const removeTopText =
    'document.body.innerHTML = document.body.innerHTML.replace("RRRR", "");';

  const jsCode = `${removeTopText}${changeTextPadding}`;

  return (
    <Wrapper style={accentTypeStyles.container}>
      {loading && <Spinner accentType={SPINNER_ACCENT_TYPE.FILL} />}
      {type.value === POST_ACCENT_TYPE.LINK && item.link && item.link.href && (
        <>
          {console.log(item.link.href)}
          <WebView
            source={{uri: item.link.href}}
            style={accentTypeStyles.webView}
            showsVerticalScrollIndicator={false}
            onLoadEnd={() => setLoading(false)}
            javaScriptEnabled={true}
            originWhitelist={['*']}
            javaScriptEnabledAndroid={true}
            injectedJavaScript={jsCode}
            messagingEnabled={true}
            onMessage={() => null}
          />
        </>
      )}
      {type.value === POST_ACCENT_TYPE.VIDEO && (
        <>
          {content?.src && (
            <Video
              src={content.src}
              poster={
                media_group[0]?.media_item[0]?.src
                  ? media_group[0].media_item[0].src
                  : null
              }
            />
          )}
          <View style={accentTypeStyles.infoContainer}>
            {!isEmpty(title) && (
              <Txt style={accentTypeStyles.title} text={title} />
            )}
            {!isEmpty(summary) && (
              <Txt style={accentTypeStyles.summary} text={summary} />
            )}
            {!isEmpty(published) && (
              <Txt
                style={accentTypeStyles.date}
                text={dateHandler.published(published)}
              />
            )}
          </View>
        </>
      )}
    </Wrapper>
  );
}

export const PostFull = React.memo(PostComponent);
