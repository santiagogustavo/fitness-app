import React from 'react';
import styled from 'styled-components/native';

type Props = {
  current: number;
  total: number;
};

const Container = styled.View`
  width: 50%;
  padding: 32px 0;
`;

const Bar = styled.View`
  background-color: #8b80f8;
  height: 8px;
  border-radius: 4px;
  width: ${(props: Props) => (props.current / props.total) * 100}%;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 32px;
  color: #7165e3;
`;

const ProgressBar = ({ current, total }: Props) => (
  <Container>
    <Bar current={current} total={total} />
    <Text>{`${current} de ${total}`}</Text>
  </Container>
);

export default ProgressBar;
