import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import BackgroundCarousel from '@/components/BackgroundCarousel/BackgroundCarousel';

const View = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomButton = styled.TouchableOpacity`
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #ffa726;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const images = [
  'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-skipping-rope-girl-illustration-image_1242914.jpg',
  'https://cdn.dribbble.com/users/508588/screenshots/11181315/lncg_m80_06.jpg',
  'https://image.freepik.com/free-vector/training-home-concept_23-2148481511.jpg',
];

const Splash = () => {
  const navigation = useNavigation();

  function handleClickLogin() {
    navigation.navigate('Login');
  }

  return (
    <View>
      <BackgroundCarousel auto hide images={images} />
      <Content>
        <CustomButton onPress={handleClickLogin}>
          <ButtonText>ENTRAR</ButtonText>
        </CustomButton>
      </Content>
    </View>
  );
};

export default Splash;
