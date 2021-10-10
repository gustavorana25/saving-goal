import CardContainer from '../../components/CardContainer/CardContainer';
import TitleSection from '../../components/TitleSection/TitleSection';
import { Section } from './CreateGoal.styles';

function CreateGoalPage(): JSX.Element {
  return (
    <Section>
      <TitleSection>
        Let&apos;s plan your <strong>saving goal</strong>.
      </TitleSection>
      <CardContainer></CardContainer>
    </Section>
  );
}

export default CreateGoalPage;
