import React from 'react';
import { TakeSurveyScreen } from '@src/screens';
import { getPropsWithNavigation, renderScreen } from '@utils/Helper';

describe('Snapshot Testcase for Rendering TakeSurvey Screen Component', () => {
  test('TakeSurvey Screen Snapshot with Mocked Dispatch', () => {
    const dispatchMock = jest.fn();
    const useAppDispatchMock = jest.requireMock('@hooks').useAppDispatch;
    useAppDispatchMock.mockReturnValue(dispatchMock);
    const props = getPropsWithNavigation();
    const takeSurvey = renderScreen(<TakeSurveyScreen {...props} />).toJSON();
    expect(takeSurvey).toMatchSnapshot();
  });
});
