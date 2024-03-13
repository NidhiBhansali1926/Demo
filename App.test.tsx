import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native';

describe('App screen Snapshot', () => {
  test('App screen Snapshot', () => {
    const app = renderer.create(
      <View>
        <Text>App Component</Text>
      </View>,
    );
    const appJSON = app.toJSON();
    expect(appJSON).toMatchSnapshot();
  });
});
