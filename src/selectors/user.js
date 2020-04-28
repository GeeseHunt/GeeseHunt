import { createSelector } from 'reselect';

const selectDomain = state => state.user;

// eslint-disable-next-line import/prefer-default-export
export const selectUser = createSelector(selectDomain, subState => subState);
