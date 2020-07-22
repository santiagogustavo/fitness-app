import React from 'react';
// import { Text } from 'react-native';
import styled from 'styled-components/native';

// import * as Linking from 'expo-linking';

import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';

const View = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
`;

const FacebookButton = styled(ButtonIcon)`
  background-color: #039be5;
`;

const TitleText = styled.Text`
  font-size: 32px;
  text-align: center;
  margin: 40px;
  color: #0b0b24;
`;

const Login = () => {
  function handleClickLoginFacebook() {
    // Linking.openURL('https://wa.me/5519995179798');
    console.log('foo');
  }

  return (
    <View>
      <TitleText>Olá, vamos treinar 😁</TitleText>
      <FacebookButton
        onPress={handleClickLoginFacebook}
        label="ENTRAR COM FACEBOOK"
        icon="facebook"
      />
      <Button onPress={handleClickLoginFacebook} label="ENTRAR COM CELULAR" />
      <Button onPress={handleClickLoginFacebook} label="ESQUECI MINHA SENHA" />
    </View>
  );
};

export default Login;
