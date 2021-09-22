import { shallow } from 'enzyme';

import CollectionPreview from './collection-preview.component';

describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  let mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop',
    };
    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      title: 'hats',
      items: [],
      routeName: mockRouteName,
      history: mockHistory,
      match: mockMatch,
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when h1.title is clicked', () => {
    wrapper.find('h1.title').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`);
  });
});
