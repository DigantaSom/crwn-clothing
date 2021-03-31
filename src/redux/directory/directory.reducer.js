import DIRECTORY_DATA from './directory.data';

const INITIAL_STATE = {
  sections: DIRECTORY_DATA,
};

const directoryReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
