import * as Actions from './actions';

export const toggleHiringBar = (
  showHiringBar: boolean
): Actions.HIRING_BAR_TOGGLE => ({
  type: 'HIRING_BAR_TOGGLE',
  payload: { showHiringBar },
});
