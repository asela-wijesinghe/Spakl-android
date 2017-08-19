import React from 'react';
import styled from 'styled-components/native';
import { BackgroundColorTXHome, PrimaryColorTXHome } from 'TXRNThemeManager';
import {
  View,
  Text
} from 'react-native';

const Container = styled.View`
  background-color: ${props => props.bgcolor};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.View`
  background-color: ${props => props.bgcolor};
  display: flex;
  flex-direction: column;
  flex: 0.08;
`;

const CenteredTitle = styled.Text`
  align-self: center;
  font-size: 18px;
  color:  ${props => props.color};
  margin: 20px;
`;

const Login = () => (
  <Container
    bgcolor={BackgroundColorTXHome}
  >
    <Header
      bgcolor={PrimaryColorTXHome}
    >
      <CenteredTitle
        color={BackgroundColorTXHome}
      >SPAKL
      </CenteredTitle>
    </Header>

  </Container>
);

export default Login;
