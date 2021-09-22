import { shallow } from 'enzyme';

import HomePage from './homepage.component';

describe('HomePage component', () => {
  it('should render HomePage component', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
