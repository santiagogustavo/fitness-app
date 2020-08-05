import React from 'react';
import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

type ContainerProps = {
  statusBarHeight: number;
};

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding-top: ${(props: ContainerProps) => props.statusBarHeight}px;
`;

type Props = {
  children: any;
};

const Page = ({ children, ...props }: Props) => {
  const statusBarHeight = getStatusBarHeight();
  return (
    <Container statusBarHeight={statusBarHeight} {...props}>
      {children}
    </Container>
  );
};

export default Page;
