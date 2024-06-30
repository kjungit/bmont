const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  KAKAO: 'Kakao',
  GOOGLE: 'Google',
} as const;

const mainTabNavigations = {
  MATCH: 'match',
  LIKE: 'like',
  CHAT: 'chat',
  MY_PAGE: 'MyPage',
} as const;

export {authNavigations, mainTabNavigations};
