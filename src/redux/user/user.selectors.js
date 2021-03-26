import { createSelector } from 'reselect';

const selectUser = state => state.user;

// memoized selector
export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);
