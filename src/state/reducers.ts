import * as React from 'react';
import * as Actions from './actions';

// -----------------------------
// State

export interface GlobalState {
  showHiringBar: Boolean;
}

export const initialState: GlobalState = {
  showHiringBar: true,
};

export const GlobalStateContext = React.createContext(initialState);
export const useGlobalState = () => React.useContext(GlobalStateContext);

export const reducer = (state: GlobalState, action: Actions.All) => {
  switch (action.type) {
    case Actions.HIRING_BAR_TOGGLE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// -----------------------------
// Dispatch

type GlobalDispatch = React.Dispatch<Actions.All>;

// tslint:disable-next-line:variable-name no-empty
export const GlobalDispatchContext = React.createContext<GlobalDispatch>(
  () => {}
);
export const useGlobalDispatch = () => React.useContext(GlobalDispatchContext);
