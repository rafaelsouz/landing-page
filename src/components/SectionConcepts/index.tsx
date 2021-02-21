import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { sectionConceptsProps } from 'types/api';

const SectionConcepts = ({ title, concepts }: sectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((concept) => (
          <S.Item key={concept.title}>{concept.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
);

export default SectionConcepts;
