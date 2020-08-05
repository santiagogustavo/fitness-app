import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { BackHandler } from 'react-native';
import styled from 'styled-components/native';

import Button from '@/components/Button';
import Page from '@/components/Page';
import ProgressBar from '@/components/ProgressBar';
import StepName from '@/components/SignUp/StepName';
import StepGender from '@/components/SignUp/StepGender';

import { SignUpContext } from '@/Contexts';

const View = styled(Page)`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
`;

const StepView = styled.View`
  flex: 1;
`;

const NextButton = styled(Button)`
  margin-bottom: 32px;
`;

const SignUp = () => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);

  const [state, dispatch] = useReducer(
    function (prevState: any, action: any) {
      switch (action.type) {
        case 'SET_NAME':
          return {
            ...prevState,
            name: action.name,
          };
        default:
          return { ...prevState };
      }
    },
    {
      name: '',
    },
  );

  const signUpContext = useMemo(
    () => ({
      setName: async (name: string) => {
        dispatch({ type: 'SET_NAME', name });
      },
    }),
    [],
  );

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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepName />;
      case 2:
        return <StepGender name={state.name} />;
      default:
        return null;
    }
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
      <SignUpContext.Provider value={signUpContext}>
        <StepView>{renderStep()}</StepView>
      </SignUpContext.Provider>
      <NextButton onPress={handleClickNext} label="CONTINUAR" />
    </View>
  );
};

export default SignUp;
