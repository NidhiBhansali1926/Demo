import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import { Routes } from './routes';

import { BoostJourneyScreen, ElevateAdventureScreen, EnterTheGloversScreen, MaximizeExperienceScreen, TakeSurveyScreen } from '@screens';
import { AuthParamsList } from '@typing/navigation';

const Stack = createStackNavigator<AuthParamsList>();

// @refresh reset
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.TakeSurvey} component={TakeSurveyScreen} />
      <Stack.Screen name={Routes.ElevateAdventure} component={ElevateAdventureScreen} />
      <Stack.Screen name={Routes.MaximizeExperience} component={MaximizeExperienceScreen} />
      <Stack.Screen name={Routes.BoostJourney} component={BoostJourneyScreen} />
      <Stack.Screen name={Routes.EnterTheGlovers} component={EnterTheGloversScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
