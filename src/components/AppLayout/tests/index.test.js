/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { AppLayout } from '..';

describe('AppLayout', () => {
  let shallow;
  let props;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    const fakeUser = {
      id: 'id',
      displayName: 'name',
      avatarUrl: '',
    };
    props = { user: fakeUser };
  });

  describe('#render', () => {
    it('renders without errors', () => {
      const wrapper = shallow(
        <AppLayout {...props}>
          <div>Hello world!</div>
        </AppLayout>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
