import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import TextInput from '@/components/TextInput';

import { SignUpContext } from '@/Contexts';

const View = styled.View`
  padding: 0 32px;
`;

const TextHighlight = styled.Text`
  color: #7165e3;
`;

const TextBig = styled.Text`
  color: #0b0b24;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const Input = styled(TextInput)`
  margin-top: 32px;
`;

const StepName = () => {
  const { setName }: any = useContext(SignUpContext);
  const [input, setInput] = useState('');

  const handleChangeName = (text: string) => {
    setInput(text);
    setName(text);
  };

  return (
    <View>
      <TextBig>
        Bem vindo ao <TextHighlight>APP</TextHighlight>!
      </TextBig>
      <TextBig>
        Precisamos de algumas informações, vamos começar com o seu
        <TextHighlight> nome</TextHighlight>:
      </TextBig>
      <Input onChangeText={handleChangeName} value={input} />
    </View>
  );
};

export default StepName;
