import { render, RenderResult } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';
import { theme } from '../../styles/theme/theme';

export const renderWithTheme = (
  children: React.ReactNode,
  options = undefined
): RenderResult => {
  (ThemeConsumer as any)._currentValue = theme;
  return render(<>{children}</>, options);
};

export const noop = (): null => {
  return null;
};
