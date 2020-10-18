import {
  Button,
  Container,
  Content,
  H1,
  H3,
  Icon,
  Left,
  List,
  ListItem,
  Radio,
  Right,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import CountDown from 'react-native-countdown-component';
import QuizData from './src/Data/QuizData.json';
const App = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [score, setScore] = useState(0);

  const _handleNext = () => {
    if (activeQuestion < 10) {
      setActiveQuestion(activeQuestion + 1);
      setAnswerSelected(null);
      if (QuizData.questions[activeQuestion].correctIndex === answerSelected) {
        setScore(score + 1);
        ToastAndroid.show('Correct Answer', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Wrong Answer', ToastAndroid.SHORT);
      }
    } else {
      setQuizComplete(true);
    }
  };

  const _handleChooseAnswer = (index) => {
    setAnswerSelected(index);
  };
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
            <H1>Question {activeQuestion} of 10</H1>
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
        <H3
          style={{
            marginTop: 25,
          }}>
          {QuizData.questions[activeQuestion].question}
        </H3>
        <List>
          {QuizData.questions[activeQuestion].answers.map((answer, index) => (
            <ListItem
              selected={index == answerSelected ? true : false}
              key={index}
              onPress={() => _handleChooseAnswer(index)}>
              <Left>
                <Text>{answer}</Text>
              </Left>
              <Right>
                <Radio
                  color={'#f0ad4e'}
                  selectedColor={'#5cb85c'}
                  selected={index == answerSelected ? true : false}
                />
              </Right>
            </ListItem>
          ))}
        </List>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          {quizComplete ? (
            <Button danger block>
              <Text>Submit </Text>
            </Button>
          ) : (
            <Button primary block onPress={_handleNext}>
              <Text>Next</Text>
            </Button>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
