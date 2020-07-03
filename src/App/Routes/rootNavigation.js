import {createRef} from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = createRef();

export function push(...args) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(...args));
  }
}
export function goBack() {
  if (navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
}

export function reset(...args) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.reset(...args));
  }
}

export function navigate(name, params) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
