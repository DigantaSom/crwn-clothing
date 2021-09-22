import { shallow } from 'enzyme';

import { CollectionPage } from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

describe('CollectionPage component', () => {
  let wrapper;
  const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test',
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as items array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
