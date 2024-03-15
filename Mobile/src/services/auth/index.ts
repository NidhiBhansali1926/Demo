import { api } from '../api';

import { apiEndPoints } from '@utils/Constants';

export const authApis = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.query<AuthApiTypes.UserDataResponse, void>({
      query: () => ({
        url: apiEndPoints.getUserData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetUserDataQuery } = authApis;
