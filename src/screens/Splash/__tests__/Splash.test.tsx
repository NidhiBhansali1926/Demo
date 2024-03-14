import React from 'react';
import { SplashScreen } from '@src/screens';
import { getPropsWithNavigation, renderScreen } from '@utils/Helper';

describe('Snapshot Test for Rendering Splash Screen Component', () => {
  test('Snapshot of Splash Screen with Navigation Props', () => {
    const props = getPropsWithNavigation();
    const splashScreenSnapshot = renderScreen(<SplashScreen {...props} />).toJSON();
    expect(splashScreenSnapshot).toMatchSnapshot();
  });
});
