import { Share } from 'react-native';
import * as Expo from 'expo';

const handleShare = (message, url, title, screen) => {
  Share.share(
    {
      message,
      url,
      title
    },
    {
      // Android only:
      dialogTitle: `Share ${title}`, // iOS only:
      excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
    }
  ).then(() => {
    Expo.Amplitude.logEvent(`BUTTON: Share - ${screen} Screen`); });
};

export default handleShare;
