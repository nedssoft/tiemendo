import React from "react";
import  'styled-components/macro'
import {
  Container,
  Content,
  Card,
  H1,
  Section,
  Article,
  Profile,
  H2,
  CardContent,
} from "./Styles";

import SocialLinks from "./Social";
import teamProfiles from "./data";

export default function AboutPage() {

  return (
    <Container>
      <Section>
        <H1>Meet Our Awesome Team</H1>
        <Article>
          <p>
            Our team is a conglomerate of highly skilled, talented and versatile
            Engineers.
          </p>
          <p>
            We deploy our wealth of experiences in delivering top-notch services
            and utmost client satisfaction.
          </p>
          <p>We've got your back anytime any day!</p>
        </Article>
        <Content>
          {teamProfiles.map(member => (
            <Profile key={member.name}>
              <Card bgImage={member.image}> 
                <CardContent>
                  <p>{member.role}</p>
                  <SocialLinks links={member.social} />
                </CardContent>
              </Card>
              <H2>{member.name}</H2>
            </Profile>
          ))}
        </Content>
      </Section>
    </Container>
  );
}
