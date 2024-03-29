import * as React from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext,
  reducer,
  initialState,
} from "./reducers";
import { Box } from "@theme-ui/components";

// tslint:disable-next-line: variable-name
export const GlobalStateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        <Box
          sx={{
            body: {
              margin: 0,
            },
          }}
        >
          {children}
        </Box>
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};
