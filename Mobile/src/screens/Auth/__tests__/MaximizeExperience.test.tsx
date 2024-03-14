import React from 'react';
import { MaximizeExperienceScreen } from '@src/screens';
import { getPropsWithNavigation, renderScreen } from '@utils/Helper';

describe('Snapshot Test for Rendering MaximizeExperience Screen Component', () => {
  test('Snapshot of MaximizeExperience Screen with Navigation Props', () => {
    const props = getPropsWithNavigation();
    const maximizeExperienceSnapshot = renderScreen(<MaximizeExperienceScreen {...props} />).toJSON();
    expect(maximizeExperienceSnapshot).toMatchSnapshot();
  });
});
