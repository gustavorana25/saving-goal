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

function MonthlyAmount(props: MonthlyAmountProps): JSX.Element {
  const { amountMonths, totalAmount } = props;
  const amountPerMonth = Math.ceil(totalAmount / amountMonths);

  return (
    <GeneralMonthlyAmount>
      <TopContent>
        <Title>Monthly amount</Title>
        <AmountPerMonth>{currencyFormater(amountPerMonth)}</AmountPerMonth>
      </TopContent>
      <BottomContent>
        <Text>
          You’re planning <strong>{amountMonths} monthly deposits</strong> to
          reach your <strong>{currencyFormater(totalAmount)}</strong> goal by{' '}
          <strong>October 2020</strong>.
        </Text>
      </BottomContent>
    </GeneralMonthlyAmount>
  );
}

export default MonthlyAmount;
