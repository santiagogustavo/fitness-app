import React from 'react';
import styled from 'styled-components/native';

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

type Props = {
  name: string;
};

const StepGender = ({ name }: Props) => {
  return (
    <View>
      <TextBig>
        Legal, <TextHighlight>{name}</TextHighlight>!
      </TextBig>
      <TextBig>
        Agora, precisamos que informe o seu
        <TextHighlight> gênero</TextHighlight>:
      </TextBig>
    </View>
  );
};

export default StepGender;
