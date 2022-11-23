import React from 'react';
import {WithStatusBar} from '../../components';
import colors from '../../themes/colors';
import {Header} from '../../components/Header/index';
import {TitleHome} from './style';
import {texts} from './texts';
const ListPokemonHome: React.FunctionComponent = () => {
  return (
    <>
      <Header onPressBack={() => console.log('volta')} />
      <TitleHome>{texts.titleText}</TitleHome>
    </>
  );
};

const ScreenListPokemonHome = WithStatusBar(
  colors.HEADER_COLOR,
  'dark-content',
)(ListPokemonHome);
export default ScreenListPokemonHome;
