import React from 'react';

import Container from 'components/Container';

import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a
          href="https://github.com/rafaelsouz"
          target="_blank"
          rel="noreferrer"
        >
          Rafael Souza
        </a>
      </p>
      <p>
        Design por <a href="https://dribbble.com/vmarcosp">Marcos Oliveira</a>
      </p>
    </Container>
  </S.Wrapper>
);

export default Footer;
