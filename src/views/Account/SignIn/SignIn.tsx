import React, { useContext } from 'react';
import styled from 'styled-components/native';

import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';
import Page from '@/components/Page';

import { AuthContext } from '@/Contexts';

const View = styled(Page)`
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

const SignIn = () => {
  const { signIn }: any = useContext(AuthContext);

  const handleClickSignInFacebook = () => {
    signIn({ access_token: 'test' });
  };

  const handleClickSignInPhone = () => {
    signIn({ access_token: 'test' });
  };

  return (
    <View>
      <TitleText>Olá, vamos treinar 😁</TitleText>
      <FacebookButton
        onPress={handleClickSignInFacebook}
        label="ENTRAR COM FACEBOOK"
        icon="facebook"
      />
      <Button onPress={handleClickSignInPhone} label="ENTRAR COM CELULAR" />
    </View>
  );
};

export default SignIn;
