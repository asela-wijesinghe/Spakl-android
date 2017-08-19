import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text
} from 'react-native';
import { BackgroundColorTXHome, PrimaryColorTXHome } from 'TXRNThemeManager';

const Container = styled.View`
  background-color: ${props => props.bgcolor};
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Login = () => (
  <Container
    bgcolor={PrimaryColorTXHome}
  >
    <Container
      bgcolor={BackgroundColorTXHome}
    >
      <Text >LOGIN</Text>
    </Container>
  </Container>
);

export default Login;
