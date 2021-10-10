import Button from '../../components/Button/Button';
import CardContainer from '../../components/CardContainer/CardContainer.styles';
import CurrencyInput from '../../components/form/CurrencyInput/CurrencyInput';
import MonthNavigation from '../../components/form/MonthNavigation/MonthNavigation';
import ImageAndInfo from '../../components/ImageAndInfo/ImageAndInfo';
import MonthlyAmount from '../../components/MonthlyAmount/MonthlyAmount';
import TitleSection from '../../components/TitleSection/TitleSection';
import { ButtonContainer, Grid, Section } from './CreateGoal.styles';

function CreateGoalPage(): JSX.Element {
  return (
    <Section>
      <TitleSection>
        Let&apos;s plan your <strong>saving goal</strong>.
      </TitleSection>
      <CardContainer>
        <ImageAndInfo
          title="Buy a house"
          image="buy-a-house.svg"
          description="Saving goal"
        />

        <Grid>
          <CurrencyInput label="Total amount" name="amount" />
          <MonthNavigation label="Reach goal by" name="reachDate" />
        </Grid>

        <MonthlyAmount amountMonths={12} totalAmount={24000} />

        <ButtonContainer>
          <Button>Confirm</Button>
        </ButtonContainer>
      </CardContainer>
    </Section>
  );
}

export default CreateGoalPage;
