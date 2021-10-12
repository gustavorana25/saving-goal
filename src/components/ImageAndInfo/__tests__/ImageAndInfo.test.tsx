import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/test/testHelpers';
import ImageAndInfo from '../ImageAndInfo';

describe('<ImageAndInfo />', () => {
  it('should render props content', () => {
    renderWithTheme(
      <ImageAndInfo
        title="titlePassed"
        description="descriptionPassed"
        image="iconUrlPassed.svg"
      />
    );

    screen.getByText('titlePassed');
    screen.getByText('descriptionPassed');
    screen.getByTestId('/assets/icons/iconUrlPassed.svg');
  });
});
