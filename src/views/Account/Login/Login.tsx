import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const handleClickLoginFacebook = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  const handleClickLoginPhone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  return (
    <View>
      <TitleText>Olá, vamos treinar 😁</TitleText>
      <FacebookButton
        onPress={handleClickLoginFacebook}
        label="ENTRAR COM FACEBOOK"
        icon="facebook"
      />
      <Button onPress={handleClickLoginPhone} label="ENTRAR COM CELULAR" />
    </View>
  );
};

export default Login;
