import { queryProvider, timeProvider } from '@/utils/search';
import { DefaultValue, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { accessTokenProvider, refreshTokenProvider } from '@/utils/token';
import { isLoginProvider } from '@/utils/auth';

const { persistAtom } = recoilPersist();

const queryState = selector<string>({
  key: 'query',
  get: () => {
    return queryProvider.get();
  },
  set: (_, query) => {
    if (!(query instanceof DefaultValue)) {
      queryProvider.remove();
      queryProvider.set(query);
    }
  },
});

const timeState = selector<number>({
  key: 'time',
  get: () => {
    return timeProvider.get();
  },
  set: (_, time) => {
    if (!(time instanceof DefaultValue)) {
      timeProvider.set(time);
    }
  },
});

const isLoginState = selector<boolean>({
  key: 'isLogin',
  get: () => {
    return isLoginProvider.get();
  },
  set: (_, isLogin) => {
    if (!isLogin) {
      isLoginProvider.remove();
    }

    if (!(isLogin instanceof DefaultValue)) {
      isLoginProvider.set(isLogin.toString());
    }
  },
});

const accessTokenState = selector<string>({
  key: 'accessToken',
  get: () => {
    return accessTokenProvider.get();
  },
  set: (_, accessToken) => {
    if (!accessToken) {
      accessTokenProvider.remove();
    }

    if (!(accessToken instanceof DefaultValue)) {
      accessTokenProvider.set(accessToken);
    }
  },
});

const refreshTokenState = selector<string>({
  key: 'refreshToken',
  get: () => {
    return refreshTokenProvider.get();
  },
  set: (_, refreshToken) => {
    if (!refreshToken) {
      refreshTokenProvider.remove();
    }

    if (!(refreshToken instanceof DefaultValue)) {
      refreshTokenProvider.set(refreshToken);
    }
  },
});

export { queryState, timeState, accessTokenState, refreshTokenState };
