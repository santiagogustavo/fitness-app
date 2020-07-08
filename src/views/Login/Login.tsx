import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function Login() {
  return (
    <View>
      <Text>entre na sua conta</Text>
    </View>
  );
}
