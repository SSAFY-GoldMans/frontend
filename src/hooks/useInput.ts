import { useState } from 'react';

function useInput<T>(initState: T) {
  const [value, setValue] = useState<T | string>(initState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    changeValue,
  };
}

export default useInput;
