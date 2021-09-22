import { shallow } from 'enzyme';

import { CheckoutPage } from './checkout.component';

describe('CheckoutPage component', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      cartItems: [],
      total: 100,
    };
    wrapper = shallow(<CheckoutPage {...mockProps} />);
  });

  it('should render CheckoutPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
