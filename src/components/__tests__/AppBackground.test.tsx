import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import renderer from 'react-test-renderer';

import { BG_IMAGE } from '@backgrounds';
import { AppBackground } from '@src/components';

// Mocking the LinearGradient component
jest.mock('expo-linear-gradient', () => {
  const ViewComponent = require('react-native').View;
  const TextComponent = require('react-native').Text;
  const MockLinearGradient = ({ colors, locations, style }) => (
    <ViewComponent style={style}>
      <TextComponent>Mock LinearGradient</TextComponent>
    </ViewComponent>
  );
  return {
    LinearGradient: MockLinearGradient,
  };
});

describe('Snapshot Testcase for Rendering AppBackground Component', () => {
  test('AppBackground component Snapshot', () => {
    const appBackgroundComponent = renderer
      .create(
        <AppBackground>
          <ImageBackground source={BG_IMAGE.takeSurvey}>
            <></>
          </ImageBackground>
        </AppBackground>,
      )
      .toJSON();
    expect(appBackgroundComponent).toMatchSnapshot();
  });
});
