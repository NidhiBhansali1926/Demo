import React from 'react';
import { BoostJourneyScreen } from '@src/screens';
import { getPropsWithNavigation, renderScreen } from '@utils/Helper';

describe('Snapshot Test for Rendering BoostJourney Screen Component', () => {
  test('Snapshot of BoostJourney Screen with Navigation Props', () => {
    const props = getPropsWithNavigation();
    const boostJourneySnapshot = renderScreen(<BoostJourneyScreen {...props} />).toJSON();
    expect(boostJourneySnapshot).toMatchSnapshot();
  });
});
