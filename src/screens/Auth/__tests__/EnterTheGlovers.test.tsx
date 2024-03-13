import React from 'react';
import { EnterTheGloversScreen } from '@src/screens';
import { getPropsWithNavigation, renderScreen } from '@utils/Helper';

describe('Snapshot Test for Rendering EnterTheGlovers Screen Component', () => {
  test('Snapshot of EnterTheGlovers Screen with Navigation Props', () => {
    const props = getPropsWithNavigation();
    const enterTheGloversSnapshot = renderScreen(<EnterTheGloversScreen {...props} />).toJSON();
    expect(enterTheGloversSnapshot).toMatchSnapshot();
  });
});
