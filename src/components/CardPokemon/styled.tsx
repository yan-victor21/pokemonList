import {Pressable, Text, View} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export const Container = styled(View)`
  margin-top: 20px;
  align-items: center;
  margin-left: 10px;
`;

export const CardContainer = styled(Pressable)`
  width: 140px;
  height: 197px;
  margin-top: 7px;
  align-items: center;
  background-color: red;
  border-radius: 15px;
`;

export const IndexPokemon = styled(View)`
  position: absolute;
  z-index: 10;
  width: 49px;
  height: 17px;
  border-radius: 10px;
  align-items: center;
  opacity: 1;

  background-color: ${colors.INDEX_CARD};
`;
export const TextIndex = styled(Text)`
  font-family: ${fonts.families.inter.regular};
  font-size: ${fonts.size.medium};
  color: ${colors.HEADER_COLOR};
  text-align: left;
`;
