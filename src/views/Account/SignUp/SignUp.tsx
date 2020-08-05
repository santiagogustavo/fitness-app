import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import styled from 'styled-components/native';

import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';

const View = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 32px;
  text-align: center;
  margin: 40px;
  color: #0b0b24;
`;

const SignUp = () => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);

  const handleClickNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleClickPrevious);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleClickPrevious);
    };
  }, [currentStep]);

  return (
    <View>
      <ProgressBar current={currentStep} total={totalSteps} />
      <TitleText>SIGNUP</TitleText>
      <Button onPress={handleClickNext} label="Próximo" />
    </View>
  );
};

export default SignUp;
