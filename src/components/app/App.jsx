
import { Component } from 'react';
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { Feedbacks } from "../feedbacks/Feedbacks";
import { Title } from 'components/title/Title';
import { StatisticsFeedback } from 'components/statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  //функція для додавання відгуку (збільшення значення в стейті)
  addFeedback = (feedback) => {
      this.setState(oldState => {
      let obj = { ...oldState };
        obj[feedback] = oldState[feedback] + 1;
      return obj;
    });
  }
  
  // Function of counting the total number of feedbacks
  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <Container>
        <GlobalStyle />

        <Title title="Please Leave feedback"/>
        <Feedbacks  options={Object.keys(this.state)}
                    onLeavefeedback={this.addFeedback}  
        />
        <Title title="Statistics" />     
        {this.countTotalFeedback() === 0
          ? <p>No feedback given</p>
          : <StatisticsFeedback statistic={this.state}
            total={this.countTotalFeedback()}
          > </StatisticsFeedback>}   

      </Container>
    );
  }
};