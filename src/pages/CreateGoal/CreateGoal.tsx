import { useState } from 'react';
import Button from '../../components/Button/Button';
import CardContainer from '../../components/CardContainer/CardContainer.styles';
import CurrencyInput from '../../components/form/CurrencyInput/CurrencyInput';
import MonthNavigation from '../../components/form/MonthNavigation/MonthNavigation';
import ImageAndInfo from '../../components/ImageAndInfo/ImageAndInfo';
import MonthlyAmount from '../../components/MonthlyAmount/MonthlyAmount';
import TitleSection from '../../components/TitleSection/TitleSection.styles';
import { currencyStringToNumber } from '../../utils/currencyFormater';
import { ButtonContainer, Grid, Section, Container } from './CreateGoal.styles';
import { addMonths } from 'date-fns';

const nextMonthDate = addMonths(new Date(), 1);

function CreateGoalPage(): JSX.Element {
  const [amount, setAmount] = useState('');
  const [reachDate, setReachDate] = useState(nextMonthDate);

  const amountAsNumber = currencyStringToNumber(amount);

  return (
    <Section>
      <TitleSection>
        Let&apos;s plan your <strong>saving goal</strong>.
      </TitleSection>
      <CardContainer>
        <Container>
          <ImageAndInfo
            title="Buy a house"
            image="buy-a-house.svg"
            description="Saving goal"
          />

          <Grid>
            <CurrencyInput
              value={amount}
              setValue={(newValue) => setAmount(newValue)}
              label="Total amount"
              name="amount"
            />
            <MonthNavigation
              value={reachDate}
              handleChange={setReachDate}
              label="Reach goal by"
              name="reachDate"
            />
          </Grid>

          <MonthlyAmount reachDate={reachDate} totalAmount={amountAsNumber} />
        </Container>

        <ButtonContainer>
          <Button>Confirm</Button>
        </ButtonContainer>
      </CardContainer>
    </Section>
  );
}

export default CreateGoalPage;
