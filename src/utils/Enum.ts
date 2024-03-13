import { KeyboardHideEventType } from '../../typing/common';

export const typeOfKeyboardEvent: { willHide: KeyboardHideEventType; didHide: KeyboardHideEventType } = {
  willHide: 'keyboardWillHide',
  didHide: 'keyboardDidHide',
};

// Request headers
export enum Headers {
  Authorization = 'authorization',
  ContentType = 'Content-Type',
}
