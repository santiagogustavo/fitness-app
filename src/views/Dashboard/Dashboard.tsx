import React from 'react';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';

import ButtonIcon from '@/components/ButtonIcon';

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
  const handleClickSendMessage = () => {
    Linking.openURL('https://wa.me/5519995179798');
  };

  return (
    <View>
      <TitleText>DASHBOARD</TitleText>
      <SendMessageButton
        onPress={handleClickSendMessage}
        label="ENVIAR MENSAGEM"
        icon="paper-plane"
      />
    </View>
  );
};

export default Dashboard;
