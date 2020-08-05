import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TextInput`
  padding: 16px 24px;
  border-radius: 24px;
  border: none;
  background-color: #fff;
  elevation: 5;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  font-size: 16px;
`;

const TextInput = ({ ...props }) => <Container {...props} />;

export default TextInput;
