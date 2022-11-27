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
  background-color: #48d0b0;
  border-radius: 15px;
`;
export const ContentImage = styled(View)`
  width: 109px;
  height: 109px;
  background-color: #9dfae47a;
  border-radius: 100px;
  margin-top: 14px;
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
  font-size: ${fonts.size.medium}px;
  color: ${colors.HEADER_COLOR};
  text-align: left;
`;

export const NamePokemon = styled(Text)`
  font-family: ${fonts.families.inter.bold};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.large}px;
  text-align: left;
  color: ${colors.WHITE};
  margin-top: 5px;
`;

export const FlagTypeConted = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 36px;
  align-items: center;
  margin-left: 13px;
`;

export const FlagType = styled(View)`
  width: 53px;
  height: 20px;
  border-radius: 20px;
  opacity: 0.4;
  align-items: center;
  justify-content: center;
  background-color: #43a78f;
  margin-left: 3px;
`;

export const TextFlagType = styled(Text)`
  font-family: ${fonts.families.inter.regular};
  font-size: ${fonts.size.small};
  text-align: left;
  color: ${colors.WHITE};
`;
