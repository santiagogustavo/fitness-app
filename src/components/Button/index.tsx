import React, { Component } from 'react';
import styled from 'styled-components/native';

const CustomButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background-color: #7165e3;
  border-radius: 24px;
  width: 70%;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

type Props = {
  label: string;
  onPress: any;
};

class ButtonIcon extends Component<Props> {
  render() {
    const { label, onPress, ...props } = this.props;
    return (
      <CustomButton onPress={onPress} {...props}>
        <ButtonText>{label}</ButtonText>
      </CustomButton>
    );
  }
}

export default ButtonIcon;
