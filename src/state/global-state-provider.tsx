import * as React from 'react';

import {
  GlobalDispatchContext,
  GlobalStateContext,
  reducer,
  initialState,
} from './reducers';

// tslint:disable-next-line: variable-name
export const GlobalStateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};
