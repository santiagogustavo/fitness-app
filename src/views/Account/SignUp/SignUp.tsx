import React from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 32px;
  text-align: center;
  margin: 40px;
  color: #0b0b24;
`;

const SignUp = () => (
  <View>
    <TitleText>SIGNUP</TitleText>
  </View>
);

export default SignUp;
