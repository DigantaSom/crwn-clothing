import { shallow } from 'enzyme';

import { MenuItem } from './menu-item.component';

describe('MenuItem component', () => {
  let wrapper;
  let mockHistory;
  let mockMatch;
  const imageUrl = 'www.testImage.com';
  const size = 'large';
  const linkUrl = '/hats';

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };
    mockMatch = {
      url: '/shop',
    };

    const mockProps = {
      title: 'hats',
      imageUrl,
      size,
      linkUrl,
      history: mockHistory,
      match: mockMatch,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when MenuItemContainer is clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it('should pass size to MenuItemContainer as a prop', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
  });

  it('should pass imageUrl to BackgroundImageContainer as a prop', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl);
  });
});
