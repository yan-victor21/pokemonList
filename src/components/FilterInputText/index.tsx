import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {SimpleFilterContent, SearchFilterIcon, GoButton} from './style';
interface IFilterInputTextProps {
  onPressFilter?: (ev: 'simple' | null) => void;
  onType?: (text: string) => void;
  disabled?: boolean;
}

const FilterInputText: React.FC<IFilterInputTextProps> = (props) => {
  const {onPressFilter, onType, disabled} = props;
  const [text, setText] = useState('');
  const inputRef = useRef<TextInput>();

  return (
    <SimpleFilterContent>
      <SearchFilterIcon />
      <TextInput
        ref={inputRef}
        placeholder="Search Pokémon"
        value={text}
        onChangeText={(ev) => {
          onType(ev);
          setText(ev);
        }}
      />
      <GoButton
        onPress={() => {
          setText('');
          onPressFilter(null);
        }}
      />
    </SimpleFilterContent>
  );
};

export {FilterInputText};
