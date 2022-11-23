import React from 'react';
import {Container, ButtonBack, LogoPokemonImage} from './style';
import {TouchableHighlight, Text, Image} from 'react-native';
import {goBack} from '../Navigation/router';
import Icon from 'react-native-vector-icons';
import colors from '../../themes/colors';

interface HeaderProps {
  onPressBack?: () => void;
}
export const Header: React.FunctionComponent<HeaderProps> = ({onPressBack}) => {
  return (
    <>
      <Container>
        <LogoPokemonImage
          source={require('../../assets/Image/Pokemon_logo.svg.png')}
        />
      </Container>
    </>
  );
};
