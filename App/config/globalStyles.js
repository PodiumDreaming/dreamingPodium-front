import {Dimensions} from 'react-native';

export const fonts = {
  gmarket: 'GmarketSansLight',
  spoqaRegular: 'SpoqaHanSansNeo-Regular',
  spoqaBold: 'SpoqaHanSansNeo-Bold',
  spoqaLight: 'SpoqaHanSansNeo-Light',
};

export const colors = {
  primary: '#44BCCE',
  black: '#191919',
  white: '#ffffff',

  lightBlue: '#8ED7E1',
  lightGreen: '#6FF1CE',

  textGrey: '#5F6768',

  darkGrey: '#5F6768',
  lightGrey: '#9098B1',
  borderGrey: '#d2d2d2',

  whiteGrey: '#e0e0e0',

  //social button colors
  apple: '#040708',
  kakaoTalk: '#FBE950',
};

export const storyBoardDimensions = {
  height: 835,
  width: 397,
};

export const fontSizes = {
  title: 18,
  subtitle: 12,
  minititle: 10,
  textInput: Dimensions.get('screen').height <= 650 ? 16 : 20,
};

export const images = {
  home: require('../assets/images/home.png'),
  dream: require('../assets/images/dream.png'),
  profile: require('../assets/images/profile.png'),
  profileImgGroup: require('../assets/images/user.png'),
  logo: require('../assets/images/dreamingLogo.png'),
  trainingPart: require('../assets/images/trainingPart.png'),
  conditioningPart: require('../assets/images/conditioningPart.png'),
  check: require('../assets/images/check.png'),
  dropButton: require('../assets/images/dropButton.png'),
  upButton: require('../assets/images/upButton.png'),
  kakao: require('../assets//images/kakaoLogin.png'),
  apple: require('../assets//images/appleLogin.png'),
  addButton: require('../assets/images/add_circle.png'),
  closeButton: require('../assets/images/close.png'),
  dreaming: require('../assets/images/dreaming.png'),
};

export const height = (
  Dimensions.get('screen').height *
  (1 / storyBoardDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get('screen').width *
  (1 / storyBoardDimensions.width)
).toFixed(2);
