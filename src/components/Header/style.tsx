import styled from 'styled-components/native';
import {View, TouchableHighlight, Image} from 'react-native';
import colors from '../../themes/colors';

export const Container = styled(View)`
  width: 100%;
  align-items: center;
  height: 75px;
  justify-content: center;
  flex-direction: row;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${colors.HEADER_COLOR};
  opacity: 1;
`;
export const ButtonBack = styled(TouchableHighlight)`
  position: absolute;
  left: 18px;
  padding: 8px;
  background-color: ${colors.HEADER_COLOR};
`;

export const LogoPokemonImage = styled(Image)`
  background-color: ${colors.HEADER_COLOR};
  width: 122px;
  height: 45px;
`;
