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
import QuizData from '../Data/QuizData.json';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const nav = useNavigation();
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

  const _handleOnSubmit = async () => {
    nav.navigate('Score', {
      score,
    });
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
            <H3>Question {activeQuestion} of 10</H3>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <CountDown
              until={60 * 10}
              // until={10}
              onFinish={() => {
                setQuizComplete(true);
                ToastAndroid.show('Sorry, timeOut', ToastAndroid.SHORT);

                _handleOnSubmit();
              }}
              onPress={() => alert('hello')}
              size={20}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'MM', s: 'SS'}}
            />
          </View>
        </View>
        <H1
          style={{
            marginTop: 15,
            color: 'blue',
            textAlign: 'center',
            marginBottom: 15,
          }}>
          {QuizData.questions[activeQuestion].question}
        </H1>
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
            <Button danger block onPress={_handleOnSubmit}>
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

export default Home;

const styles = StyleSheet.create({});
