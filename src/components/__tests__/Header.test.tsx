import React from 'react';

import { Header } from '@src/components';
import { getPropsWithNavigation, renderScreen } from '@src/utils/Helper';

describe('Snapshot Test for Rendering Header Component', () => {
  test('Snapshot of Header Component with Navigation Props', () => {
    const props = getPropsWithNavigation();
    const handleOnPressBackIcon = jest.fn();
    const headerSnapshot = renderScreen(<Header {...props} handleOnPressBackIcon={handleOnPressBackIcon} />).toJSON();
    expect(headerSnapshot).toMatchSnapshot();
  });
});
