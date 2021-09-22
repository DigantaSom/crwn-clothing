import { shallow } from 'enzyme';

import FormInput from './form-input.component';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      handleChange: mockHandleChange,
      label: 'Email',
      value: 'test@gmail.com',
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  it('should not render FormInputLabel if there is no label', () => {
    const mockProps_noLabel = {
      handleChange: mockHandleChange,
      label: '',
      value: 'test@gmail.com',
    };
    const wrapper_noLabel = shallow(<FormInput {...mockProps_noLabel} />);

    expect(wrapper_noLabel.exists('FormInputLabel')).toBe(false);
  });
});
