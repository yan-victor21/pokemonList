import React from 'react';
import {View} from 'react-native';
import {
  CardContainer,
  Container,
  IndexPokemon,
  TextIndex,
  ContentImage,
  NamePokemon,
  FlagTypeConted,
  FlagType,
  TextFlagType,
} from './styled';

export interface ICardPokemonProps {
  namePokemon?: string;
  flags?: string[];
  imagePokemon?: string;
  onPress?: () => void;
  key: string;
}
const CardPokemon: React.FunctionComponent<ICardPokemonProps> = (props) => {
  return (
    <Container>
      <IndexPokemon>
        <TextIndex>{props.key}</TextIndex>
      </IndexPokemon>
      <CardContainer onPress={props.onPress}>
        <ContentImage></ContentImage>
        <NamePokemon>{props.namePokemon}</NamePokemon>
        <FlagTypeConted>
          <FlagType>
            <TextFlagType>Grass</TextFlagType>
          </FlagType>
        </FlagTypeConted>
      </CardContainer>
    </Container>
  );
};

export {CardPokemon};
