import { Dispatch, SetStateAction } from 'react';

export interface MonthNavigationProps {
  label: string;
  name: string;
  value: Date;
  handleChange: Dispatch<SetStateAction<Date>>;
}

export interface ArrowProps {
  isRightArrow?: boolean;
}
