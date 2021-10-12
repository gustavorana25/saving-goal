import { currencyFormater } from '../../utils/currencyFormater';
import {
  GeneralMonthlyAmount,
  Title,
  TopContent,
  AmountPerMonth,
  BottomContent,
  Text,
} from './MonthlyAmount.styles';
import { MonthlyAmountProps } from './MonthlyAmount.types';
import { differenceInMonths, startOfMonth, format } from 'date-fns';

function MonthlyAmount(props: MonthlyAmountProps): JSX.Element | null {
  const { reachDate, totalAmount } = props;
  const startOfMonthDate = startOfMonth(new Date());
  const amountMonths = differenceInMonths(reachDate, startOfMonthDate);
  const reachDateIsInFuture = amountMonths > 0;

  if (!reachDateIsInFuture) {
    return null;
  }

  const amountPerMonth = Math.ceil(totalAmount / amountMonths);

  return (
    <GeneralMonthlyAmount>
      <TopContent>
        <Title>Monthly amount</Title>
        <AmountPerMonth>{currencyFormater(amountPerMonth)}</AmountPerMonth>
      </TopContent>
      <BottomContent>
        <Text data-testid="amountPerMonthText">
          You’re planning <strong>{amountMonths} monthly deposits</strong> to
          reach your <strong>{currencyFormater(totalAmount)}</strong> goal by{' '}
          <strong>{format(reachDate, 'MMMM yyyy')}</strong>.
        </Text>
      </BottomContent>
    </GeneralMonthlyAmount>
  );
}

export default MonthlyAmount;
