import styled from 'styled-components/native';
import {ScrollView, Text, View} from 'react-native';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

export const HomeConteiner = styled(View)`
  left: 15px;
  top: 20px;
  width: 95%;
  align-items: flex-start;

  height: 78%;
`;
export const TitleHome = styled(Text)`
  font-family: ${fonts.families.inter.bold};
  font-size: ${fonts.size.xLarge}px;
  text-align: left;
  color: ${colors.HEADER_COLOR};
  opacity: 1;
  font-weight: ${fonts.weight.bold};
`;

export const ListCardPokemon = styled(ScrollView)`
  width: 100%;
  margin-top: 11%;
  flex-direction: row;
  background-color: yellow;
`;
