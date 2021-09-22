import { shallow } from 'enzyme';

import { Directory } from './directory.component';

describe('Directory component', () => {
  it('should render Directory component', () => {
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
  });
});
