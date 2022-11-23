import styled from 'styled-components/native';
import {Text} from 'react-native';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

export const TitleHome = styled(Text)`
  font-family: ${fonts.families.inter.bold};
  font-size: ${fonts.size.xLarge}px;
  text-align: left;
  color: ${colors.HEADER_COLOR};
  opacity: 1;
  left: 15px;
  right: 15px;
  top: 20px;
  font-weight: ${fonts.weight.bold};
`;
