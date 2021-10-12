import { renderWithTheme } from '../../../utils/test/testHelpers';
import Header from '../Header';

describe('<Header />', () => {
  it('should render without breaking', () => {
    renderWithTheme(<Header />);
  });
});
