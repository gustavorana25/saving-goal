import { getMonthAndYearFromDate } from '../../../utils/dateFormater';
import { Label } from '../Label/Label.styles';
import { Arrow, Container, Month, Year } from './MonthNavigation.styles';
import { MonthNavigationProps } from './MonthNavigation.types';
import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';
import useKeyBind from '../../../utils/hooks/useKeyBind';

function MonthNavigation(props: MonthNavigationProps): JSX.Element {
  const { label, name, value, handleChange } = props;

  const [month, year] = getMonthAndYearFromDate(value);

  const handleChangeMonth = (diff: number) => {
    handleChange((currentDate) => {
      const newDate = addMonths(currentDate, diff);
      const startOfMonthDate = startOfMonth(new Date());
      const diffInMonths = differenceInMonths(newDate, startOfMonthDate);
      const isFutureDate = diffInMonths > 0;
      if (isFutureDate) {
        return newDate;
      }

      return currentDate;
    });
  };

  const { handleKeyBindActivation } = useKeyBind({
    onHorizontalArrowPress: handleChangeMonth,
  });

  return (
    <fieldset>
      <Label htmlFor={name}>{label}</Label>
      <Container
        tabIndex={0}
        onFocus={() => handleKeyBindActivation(true)}
        onBlur={() => handleKeyBindActivation(false)}
      >
        <Arrow onClick={() => handleChangeMonth(-1)} src="arrow-left.svg" />
        <Month>{month}</Month>
        <Year>{year}</Year>
        <Arrow
          onClick={() => handleChangeMonth(1)}
          $isRightArrow
          src="arrow-left.svg"
        />
      </Container>
    </fieldset>
  );
}

export default MonthNavigation;
