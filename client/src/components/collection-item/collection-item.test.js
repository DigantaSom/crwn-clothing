import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const mockImageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 10;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: mockImageUrl,
        name: mockName,
        price: mockPrice,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when add-to-cart-button is clicked', () => {
    wrapper.find('#add-button').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  // The below test works when styled-components are used for this component.
  // it('should render imageUrl as a prop on BackgroundImage', () => {
  // 	expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockImageUrl);
  // })

  it('should render name in div.name', () => {
    expect(wrapper.find('.name').text()).toBe(mockName);
  });

  it('should render price in div.price', () => {
    const price = parseInt(wrapper.find('.price').text());
    expect(price).toBe(mockPrice);
  });
});
