import React from 'react';
import { ElevateAdventureScreen } from '@src/screens';
import { getPropsWithNavigation, renderScreen } from '@utils/Helper';

describe('Snapshot Testcase for ElevateAdventure Screen', () => {
  test('ElevateAdventure Screen Snapshot', () => {
    const props = getPropsWithNavigation();
    const elevateAdventure = renderScreen(<ElevateAdventureScreen {...props} />).toJSON();
    expect(elevateAdventure).toMatchSnapshot();
  });
});
