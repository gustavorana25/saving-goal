import { TitleSection } from '../../components/TitleSection/TitleSection';
import { Section } from './CreateGoal.styles';

function CreateGoalPage(): JSX.Element {
  return (
    <Section>
      <div>
        <TitleSection>
          Let&apos;s plan your <strong>saving goal</strong>.
        </TitleSection>
      </div>
    </Section>
  );
}

export default CreateGoalPage;
