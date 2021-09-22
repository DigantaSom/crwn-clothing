import { shallow } from 'enzyme';

import { CollectionsOverview } from './collections-overview.component';

describe('CollectionsOverview component', () => {
  it('should render CollectionsOverview component', () => {
    expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
  });
});
