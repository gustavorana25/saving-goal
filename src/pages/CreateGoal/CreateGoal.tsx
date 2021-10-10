import { useState } from 'react';
import { useEffect } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import ImageAndInfo from '../../components/ImageAndInfo/ImageAndInfo';
import TitleSection from '../../components/TitleSection/TitleSection';
import useKeyBind from '../../utils/hooks/useKeyBind';
import { Section } from './CreateGoal.styles';

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
      </CardContainer>
    </Section>
  );
}

export default CreateGoalPage;
