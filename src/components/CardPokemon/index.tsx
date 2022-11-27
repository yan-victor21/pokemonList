import React from 'react';
import {View} from 'react-native';
import {CardContainer, Container, IndexPokemon, TextIndex} from './styled';
const CardPokemon: React.FunctionComponent = () => {
  return (
    <Container>
      <IndexPokemon>
        <TextIndex>#001</TextIndex>
      </IndexPokemon>
      <CardContainer></CardContainer>
    </Container>
  );
};

export {CardPokemon};
