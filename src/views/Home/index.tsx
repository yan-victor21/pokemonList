import React from 'react';
import {WithStatusBar} from '../../components';
import colors from '../../themes/colors';
import {Header} from '../../components/Header/index';
import {TitleHome, ListCardPokemon, HomeConteiner} from './style';
import {texts} from './texts';
import {FilterInputText} from '../../components/FilterInputText';
import {CardPokemon} from '../../components/CardPokemon';
const ListPokemonHome: React.FunctionComponent = () => {
  return (
    <>
      <Header onPressBack={() => console.log('volta')} />
      <HomeConteiner>
        <TitleHome>{texts.titleText}</TitleHome>
        <FilterInputText />
        <ListCardPokemon>
          <CardPokemon />
        </ListCardPokemon>
      </HomeConteiner>
    </>
  );
};

const ScreenListPokemonHome = WithStatusBar(
  colors.HEADER_COLOR,
  'dark-content',
)(ListPokemonHome);
export default ScreenListPokemonHome;
