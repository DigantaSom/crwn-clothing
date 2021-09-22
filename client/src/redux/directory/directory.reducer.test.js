import diretoryReducer, { INITIAL_STATE as initialState } from './directory.reducer';

describe('directoryReducer', () => {
  it('should return the initial state', () => {
    expect(diretoryReducer(undefined, {})).toBe(initialState);
  });
});
