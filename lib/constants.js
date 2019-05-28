import * as Expo from 'expo';

const { ...social } = Expo.Constants.manifest.extra.social;

// Expo constants
export const { expoVersion } = Expo.Constants;
// export const iOSBuild = Constants.platform.ios.buildNumber;
export const { manifest } = Expo.Constants;
// functions
export const getCurrentYear = new Date().getFullYear();
// Social Links
export const socialLinks = [
  {
    icon: '',
    label: '',
    url: ''
  }
];
