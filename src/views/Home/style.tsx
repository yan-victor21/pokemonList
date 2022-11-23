import styled from 'styled-components/native';
import {Text} from 'react-native';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

export const TitleHome = styled(Text)`
  font-family: ${fonts.families.inter.regular};
  /* font-size: ${fonts.size.xLarge};
  color: ${colors.HEADER_COLOR};
  left: 15px; */
`;
