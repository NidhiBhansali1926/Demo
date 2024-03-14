import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { selectToken } from '@store/selectors';
import { Headers } from '@utils/Enum';

// Define a custom fetch function for SSR environments
const customFetchFn = async (input, init) => {
  // Your custom implementation goes here
};

// Create base query with custom fetchFn
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  fetchFn: customFetchFn, // Supplying custom fetchFn property
  prepareHeaders: async (headers, { getState }) => {
    const token = selectToken(getState() as RootState);
    if (token) {
      headers.set(Headers.Authorization, `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (!result.error && result?.error?.status !== 401) {
    return result;
  }
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
