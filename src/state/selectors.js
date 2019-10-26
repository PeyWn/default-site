import { useGlobalState } from './reducers';

export const useHasHiringBar = () => {
  const { showHiringBar } = useGlobalState();
  return showHiringBar;
};
