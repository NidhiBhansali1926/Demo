import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { Routes } from '../src/navigators/routes';

export type AuthParamsList = {
  [Routes.TakeSurvey]: undefined;
  [Routes.ElevateAdventure]: undefined;
  [Routes.MaximizeExperience]: undefined;
  [Routes.BoostJourney]: undefined;
  [Routes.EnterTheGlovers]: undefined;
};

export type TakeSurveyScreenProps = StackScreenProps<AuthParamsList, Routes.TakeSurvey>;
export type ElevateAdventureScreenProps = StackScreenProps<AuthParamsList, Routes.ElevateAdventure>;
export type MaximizeExperienceScreenProps = StackScreenProps<AuthParamsList, Routes.MaximizeExperience>;
export type BoostJourneyScreenProps = StackScreenProps<AuthParamsList, Routes.BoostJourney>;
export type EnterTheGloversScreenProps = StackScreenProps<AuthParamsList, Routes.EnterTheGlovers>;

export type ApplicationStackParamList = {
  [Routes.Splash]: undefined;
  [Routes.Auth]: NavigatorScreenParams<AuthParamsList>;
};

export type ApplicationScreenProps = StackScreenProps<ApplicationStackParamList>;

export type SplashScreenProps = StackScreenProps<ApplicationStackParamList, Routes.Splash>;
