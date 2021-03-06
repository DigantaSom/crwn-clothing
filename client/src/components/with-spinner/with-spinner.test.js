import { shallow } from 'enzyme';

import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

describe('WithSpinner HOC', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('if loading is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<WrappedComponent isLoading={true} />);
    });

    it('should render Spinner component', () => {
      expect(wrapper.exists(Spinner)).toBe(true);
    });
    it('should not render component', () => {
      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('if loading is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<WrappedComponent isLoading={false} />);
    });

    it('should render component', () => {
      expect(wrapper.exists(TestComponent)).toBe(true);
    });
    it('should not render Spinner component', () => {
      expect(wrapper.exists(Spinner)).toBe(false);
    });
  });
});
