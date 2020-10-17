import {
  Button,
  Container,
  Content,
  H3,
  Icon,
  Left,
  List,
  ListItem,
  Radio,
  Right,
  Text,
} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import CountDown from 'react-native-countdown-component';

const App = () => {
  return (
    <Container>
      <Content padder contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text>Question 1</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <CountDown
              until={60 * 10 + 0}
              onFinish={() => alert('finished')}
              onPress={() => alert('hello')}
              size={20}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'MM', s: 'SS'}}
            />
          </View>
        </View>
        <H3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
          voluptas incidunt! Consectetur esse harum amet blanditiis quisquam
          distinctio ipsa perspiciatis?
        </H3>
        <List>
          <ListItem selected={false}>
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={false}>
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={false}>
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={true}
              />
            </Right>
          </ListItem>
        </List>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Button primary block>
            <Text>Next</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
