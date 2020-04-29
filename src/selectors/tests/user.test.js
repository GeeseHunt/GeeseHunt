/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import { selectUser } from '../user';

describe('user selector', () => {
  it('selects correct state', () => {
    const user = {
      id: 'id',
      displayName: 'name',
      avatarUrl: 'url',
    };
    const state = { user };

    expect(selectUser(state)).toMatchObject(user);
  });
});
