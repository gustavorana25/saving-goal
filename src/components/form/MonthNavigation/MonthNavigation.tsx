import { getMonthAndYearFromDate } from '../../../utils/dateFormater';
import { Label } from '../Label/Label.styles';
import { Arrow, Container, Month, Year } from './MonthNavigation.styles';
import { MonthNavigationProps } from './MonthNavigation.types';
import useKeyBind from '../../../utils/hooks/useKeyBind';
import { changeMonthOnlyInFutureDates } from '../../../utils/changeMonthOnlyInFutureDates';

function MonthNavigation(props: MonthNavigationProps): JSX.Element {
  const { label, name, value, handleChange } = props;

  const [month, year] = getMonthAndYearFromDate(value);

  const handleChangeMonth = (diffInMonths: number) => {
    handleChange((currentDate) => {
      return changeMonthOnlyInFutureDates(currentDate, diffInMonths);
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
        data-testid="month-navigation"
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
