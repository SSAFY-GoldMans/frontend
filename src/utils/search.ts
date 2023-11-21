const queryProvider = {
  get: () => {
    return sessionStorage.getItem('query') ?? '';
  },
  set: (query: string) => {
    sessionStorage.setItem('query', query);
  },
  remove: () => {
    sessionStorage.removeItem('query');
  },
};

const timeProvider = {
  get: () => {
    const temp: string | null = sessionStorage.getItem('time');
    return parseInt(temp !== null ? temp : '1000');
  },
  set: (time: number) => {
    const temp: string = time.toString();
    sessionStorage.setItem('time', temp);
  },
  remove: () => {
    sessionStorage.removeItem('time');
  },
};

export { queryProvider, timeProvider };
