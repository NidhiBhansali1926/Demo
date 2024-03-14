import { RootState } from '.';

export const selectToken = (state: RootState): string | undefined => state.auth.token;
