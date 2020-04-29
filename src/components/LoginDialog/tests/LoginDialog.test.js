/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import sinon from 'sinon';
import LoginDialog from '..';

describe('LoginDialog', () => {
  const shallow = createShallow();
  let props;

  beforeEach(() => {
    props = { onClose: sinon.spy() };
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#render', () => {
    it('renders without errors', () => {
      const wrapper = shallow(<LoginDialog {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
