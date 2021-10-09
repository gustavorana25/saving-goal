import { theme } from '../theme/theme';

const { breakpoints } = theme;

export const device = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile}px)`,
};
