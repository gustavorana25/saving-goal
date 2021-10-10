import { Label } from '../Label/Label.styles';
import { Arrow, Container, Month, Year } from './MonthNavigation.styles';
import { MonthNavigationProps } from './MonthNavigation.types';

function MonthNavigation(props: MonthNavigationProps): JSX.Element {
  const { label, name } = props;
  return (
    <fieldset>
      <Label htmlFor={name}>{label}</Label>
      <Container tabIndex={0}>
        <Arrow src="arrow-left.svg" />
        <Month>Outubro</Month>
        <Year>2021</Year>
        <Arrow isRightArrow src="arrow-left.svg" />
      </Container>
    </fieldset>
  );
}

export default MonthNavigation;
