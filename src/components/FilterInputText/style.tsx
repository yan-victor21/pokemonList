import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../themes/colors';
import FAIcons from 'react-native-vector-icons/FontAwesome5';

export const SimpleFilterContent = styled(View)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  max-height: 44px;
  border-width: 1px;
  height: 200px;
  border-radius: 20px;
  top: 10%;
  border-color: ${colors.HEADER_COLOR};
`;

export const SearchFilterIcon = styled(FAIcons).attrs({
  size: 20,
  name: 'search',
})`
  color: ${colors.HEADER_COLOR};
  margin-right: 13.87px;
  margin-left: 14px;
`;

export const GoButton = styled(Pressable)`
  width: 24px;
  height: 24px;
  margin-left: 290px;
  background-color: ${colors.HEADER_COLOR};
  border-radius: 20px;
  position: absolute;
`;
