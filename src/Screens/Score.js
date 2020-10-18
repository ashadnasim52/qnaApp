import {Container, Content, H1} from 'native-base';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IMG from '../assets/img.png';
import SAD from '../assets/sad.png';
const Score = ({route, navigation}) => {
  const {score} = route.params;

  return (
    <Container>
      <Content padder>
        <H1
          style={{
            textAlign: 'center',
            marginTop: 30,
          }}>
          Your Score is {score}
        </H1>

        {score > 5 ? (
          <Image
            source={IMG}
            style={{
              height: 380,
              width: '100%',
              resizeMode: 'contain',
            }}
          />
        ) : (
          <Image
            source={SAD}
            style={{
              height: 380,
              width: '100%',
              resizeMode: 'contain',
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default Score;

const styles = StyleSheet.create({});
