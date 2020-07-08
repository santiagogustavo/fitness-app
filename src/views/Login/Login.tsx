import React from 'react';
import styled from 'styled-components/native';

import * as Linking from 'expo-linking';

import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const CustomButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background-color: #01e675;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ButtonIcon = styled(Icon)`
  margin-left: 16px;
`;

const Login = () => {
  function handleClickSendMessage() {
    Linking.openURL('https://wa.me/5519995179798');
  }

  return (
    <View>
      <CustomButton onPress={handleClickSendMessage}>
        <ButtonText>ENVIAR MENSAGEM</ButtonText>
        <ButtonIcon name="paper-plane" size={15} color="white" />
      </CustomButton>
    </View>
  );
};

export default Login;
