import * as React from 'react';
const { useCallback } = React;
import { toggleHiringBar } from './creators';
import { useGlobalDispatch, useGlobalState } from './reducers';

export const useHiringBar = () => {
  const dispatch = useGlobalDispatch();
  const { showHiringBar } = useGlobalState();

  const onClose = useCallback(() => dispatch(toggleHiringBar(false)), []);
  const onOpen = useCallback(() => dispatch(toggleHiringBar(true)), []);

  return { onOpen, onClose, open: showHiringBar };
};
