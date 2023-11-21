import { queryProvider, timeProvider } from '@/utils/search';
import { DefaultValue, atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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

export { queryState, timeState };
