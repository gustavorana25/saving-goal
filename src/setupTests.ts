/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/naming-convention */

import '@testing-library/jest-dom';
import MockSvgInline from './utils/test/mockSvgInline';
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-inlinesvg', () => MockSvgInline);
