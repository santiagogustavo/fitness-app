import React, { Component } from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background-color: #039be5;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const LabelIcon = styled(Icon)`
  margin-left: 16px;
`;

type Props = {
  label: string;
  onPress: any;
  icon: string;
};

class ButtonIcon extends Component<Props> {
  render() {
    const { label, onPress, icon } = this.props;
    return (
      <CustomButton onPress={onPress}>
        <ButtonText>{label}</ButtonText>
        <LabelIcon name={icon} size={15} color="white" />
      </CustomButton>
    );
  }
}

export default ButtonIcon;
