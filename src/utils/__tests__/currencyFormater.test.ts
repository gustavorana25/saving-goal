import {
  currencyFormater,
  codelessCurrentFormater,
  currencyStringToNumber,
} from '../currencyFormater';

describe('currencyFormater', () => {
  it('should format correctly', () => {
    expect(currencyFormater(0)).toBe('$0');
    expect(currencyFormater(10)).toBe('$10');
    expect(currencyFormater(100)).toBe('$100');
    expect(currencyFormater(1000)).toBe('$1,000');
    expect(currencyFormater(10000)).toBe('$10,000');
    expect(currencyFormater(100000)).toBe('$100,000');
    expect(currencyFormater(1000000)).toBe('$1,000,000');
    expect(currencyFormater(1988123781239)).toBe('$1,988,123,781,239');
  });

  it('should round fraction digits', () => {
    expect(currencyFormater(1040.25)).toBe('$1,040');
    expect(currencyFormater(1040.49)).toBe('$1,040');
    expect(currencyFormater(1040.5)).toBe('$1,041');
    expect(currencyFormater(1040.7)).toBe('$1,041');
  });
});

describe('codelessCurrentFormater', () => {
  it('should format correctly', () => {
    expect(codelessCurrentFormater(0)).toBe('0');
    expect(codelessCurrentFormater(10)).toBe('10');
    expect(codelessCurrentFormater(100)).toBe('100');
    expect(codelessCurrentFormater(1000)).toBe('1,000');
    expect(codelessCurrentFormater(10000)).toBe('10,000');
    expect(codelessCurrentFormater(100000)).toBe('100,000');
    expect(codelessCurrentFormater(1000000)).toBe('1,000,000');
    expect(codelessCurrentFormater(1988123781239)).toBe('1,988,123,781,239');
  });

  it('should round fraction digits', () => {
    expect(codelessCurrentFormater(1040.25)).toBe('1,040');
    expect(codelessCurrentFormater(1040.49)).toBe('1,040');
    expect(codelessCurrentFormater(1040.5)).toBe('1,041');
    expect(codelessCurrentFormater(1040.7)).toBe('1,041');
  });
});

describe('currencyStringToNumber', () => {
  it('should format correctly currency with code', () => {
    expect(currencyStringToNumber('')).toBe(0);
    expect(currencyStringToNumber('$0')).toBe(0);
    expect(currencyStringToNumber('$1,000,000')).toBe(1000000);
    expect(currencyStringToNumber('$1,988,123,781,239')).toBe(1988123781239);
  });
  it('should format correctly currency without code', () => {
    expect(currencyStringToNumber('')).toBe(0);
    expect(currencyStringToNumber('0')).toBe(0);
    expect(currencyStringToNumber('1,000,000')).toBe(1000000);
    expect(currencyStringToNumber('1,988,123,781,239')).toBe(1988123781239);
  });
});
