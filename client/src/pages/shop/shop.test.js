import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { ShopPage } from './shop.component';

const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null,
    },
  };
};

describe('ShopPage component', () => {
  let wrapper;
  let mockMatch;
  let mockFetchCollectionsStart;
  let store;

  beforeEach(() => {
    const mockReducer = (state = { isFetching: true }, action) => state;

    const mockState = {
      shop: {
        isFetching: true,
      },
    };

    mockMatch = {
      path: '',
    };
    mockFetchCollectionsStart = jest.fn();

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer },
    });

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart,
    };

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchCollectionsStart() as soon as ShopPage component mounts for the first time', () => {
    expect(mockFetchCollectionsStart).toHaveBeenCalled();
  });
});
