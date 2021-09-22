import { shallow } from 'enzyme';

import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      currentUser: {
        uid: '123',
      },
      hidden: true,
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(wrapper.find('OptionLink').at(2).text()).toBe('SIGN OUT');
    });

    it('should call signOutStart when sign out link is clicked', () => {
      wrapper.find('OptionLink').at(2).simulate('click');
      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const newMockProps = {
        currentUser: null,
        hidden: true,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...newMockProps} />);

      expect(newWrapper.find('OptionLink').at(2).text()).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });
});
