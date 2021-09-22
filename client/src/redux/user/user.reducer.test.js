import userReducer, { INITIAL_STATE as initialState } from './user.reducer';
import {
  signInSuccess,
  signOutSuccess,
  signInFailure,
  signOutFailure,
  signUpFailure,
} from './user.actions';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = {
      id: 1,
      displayName: 'Diganta Som',
    };

    expect(userReducer(initialState, signInSuccess(mockUser)).currentUser).toEqual(
      mockUser,
    );
  });

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(userReducer(initialState, signOutSuccess()).currentUser).toBe(null);
  });

  it('should set error to payload on signInFailure, signOutFailure, signUpFailure actions', () => {
    const mockError = {
      message: 'errored!',
      code: 404,
    };

    expect(userReducer(initialState, signInFailure(mockError)).error).toBe(mockError);
    expect(userReducer(initialState, signOutFailure(mockError)).error).toBe(mockError);
    expect(userReducer(initialState, signUpFailure(mockError)).error).toBe(mockError);
  });
});
