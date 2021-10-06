import { useEffect, useState } from "react";

const useSessionStorageState = (key, defaultValue = "") => {
  const [state, setState] = useState(
    () => window.sessionStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.sessionStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useSessionStorageState;
