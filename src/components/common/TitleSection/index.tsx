import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{subtitle}</Styled.SubTitle>}
    <Styled.Title center={center}>{title}</Styled.Title>
    <Styled.Separator center={center}>
      <span></span>
      <span></span>
    </Styled.Separator>
  </Styled.TitleSection>
);

export default TitleSection;
