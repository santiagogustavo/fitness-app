import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';

import BackgroundCarousel from '@/components/BackgroundCarousel';
import Page from '@/components/Page';

const View = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  margin: 32px auto;
  width: 70%;
`;

const SplashTextHighlight = styled.Text`
  color: #7165e3;
`;

const SplashTextBig = styled.Text`
  color: #0b0b24;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

// const SplashText = styled.Text`
//   color: #0b0b24;
//   font-size: 18px;
//   text-align: center;
// `;

const ButtonSection = styled.View`
  margin-top: auto;
  margin-bottom: 24px;
  align-items: center;
`;

const SignIn = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  margin-top: 24px;
`;

const SignInLabel = styled.Text`
  color: #0b0b24;
  font-size: 16px;
`;

const SignInButton = styled.TouchableOpacity`
  flex: 0;
  flex-basis: 80px;
`;

const SignInText = styled.Text`
  color: #7165e3;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

const images = [
  'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-skipping-rope-girl-illustration-image_1242914.jpg',
  'https://cdn.dribbble.com/users/508588/screenshots/11181315/lncg_m80_06.jpg',
  'https://image.freepik.com/free-vector/training-home-concept_23-2148481511.jpg',
];

const Splash = () => {
  const navigation = useNavigation();

  function handleClickSignUp() {
    navigation.navigate('SignUp');
  }

  function handleClickSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <View>
      <BackgroundCarousel auto hide images={images} />
      <Page>
        <Header>
          <SplashTextBig>
            Melhore seu
            <SplashTextHighlight> estilo de vida </SplashTextHighlight>
            de forma prazerosa
          </SplashTextBig>
        </Header>
        <ButtonSection>
          <Button onPress={handleClickSignUp} label="COMEÇAR AGORA" />
          <SignIn>
            <SignInLabel>Já tem uma conta?</SignInLabel>
            <SignInButton onPress={handleClickSignIn}>
              <SignInText>Entrar</SignInText>
            </SignInButton>
          </SignIn>
        </ButtonSection>
      </Page>
    </View>
  );
};

export default Splash;
