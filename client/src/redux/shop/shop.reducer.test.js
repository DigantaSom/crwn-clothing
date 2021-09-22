import shopReducer, { INITIAL_STATE as initialState } from './shop.reducer';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

describe('shopReducer', () => {
  it('should return the initial state', () => {
    expect(shopReducer(undefined, {})).toBe(initialState);
  });

  it('should set isFetching to true if fetchCollectionsStart action is fired', () => {
    expect(shopReducer(initialState, fetchCollectionsStart()).isFetching).toBe(true);
  });

  it('should set isFetching to false and collections to payload if fetchCollectionsSuccess is fired', () => {
    const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(shopReducer(initialState, fetchCollectionsSuccess(mockItems))).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems,
    });
  });

  it('should set isFetching to false and errorMessage', () => {
    expect(shopReducer(initialState, fetchCollectionsFailure('some error'))).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'some error',
    });
  });
});
