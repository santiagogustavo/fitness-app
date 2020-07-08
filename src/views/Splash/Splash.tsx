import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Test from '@/Test';

const View = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: red;
`;

const Splash = () => {
  const navigation = useNavigation();

  function handleClickLogin() {
    navigation.navigate('Login');
  }

  return (
    <View>
      <Test />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="CLICK ME" onPress={handleClickLogin} />
    </View>
  );
};

export default Splash;
