import React from 'react';

import { AppButton } from '@src/components';
import { getPropsWithNavigation, renderScreen } from '@src/utils/Helper';

describe('Snapshot Test for Rendering AppButton Component', () => {
  test('Snapshot of AppButton Component with Navigation Props', () => {
    const props = getPropsWithNavigation();
    const buttonProps = {
      ...props,
      name: 'buttonText',
      isLoading: false,
      disabled: false,
      handleClick: jest.fn(),
    };
    const appButtonSnapshot = renderScreen(<AppButton {...buttonProps} />).toJSON();
    expect(appButtonSnapshot).toMatchSnapshot();
  });
});
