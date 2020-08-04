import React, { useContext } from 'react';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';

import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';

import { AuthContext } from '@/Contexts';

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

const SendMessageButton = styled(ButtonIcon)`
  background-color: #01e675;
`;

const Dashboard = () => {
  const { signOut }: any = useContext(AuthContext);

  const handleClickSendMessage = () => {
    Linking.openURL('https://wa.me/5519995179798');
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View>
      <TitleText>DASHBOARD</TitleText>
      <SendMessageButton
        onPress={handleClickSendMessage}
        label="ENVIAR MENSAGEM"
        icon="paper-plane"
      />
      <Button onPress={handleSignOut} label="SAIR" />
    </View>
  );
};

export default Dashboard;
