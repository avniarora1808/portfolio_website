import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I am Avni Arora. <br />
          I create 
          unique programming solutions with excellent user interfaces.
        </SectionTitle>
        <SectionText>
        I am currently a student at University of Waterloo pursuing a degree in Mathematics/Business Administration. <br />Feel free to check out some of my work.
        </SectionText>
        <Button onClick={() => window.location= '#about'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;