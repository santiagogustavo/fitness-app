import React from 'react';
import styled from 'styled-components/native';

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

export default function App() {
  return (
    <View>
      <Test />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
