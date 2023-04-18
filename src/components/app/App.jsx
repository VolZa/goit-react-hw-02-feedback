
import { Component } from 'react';
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { Feedbacks } from "../feedbacks/Feedbacks";
import { Title } from 'components/title/Title';

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
        // console.log(obj);
        console.log(obj[feedback]);
      return obj;
    });
  }

  render() {
      return (
    <Container>
      <GlobalStyle />

      <Title title="Please Leave feedback"/>
      <Feedbacks  options={Object.keys(this.state)}
                  onLeavefeedback={this.addFeedback}  
      />
    </Container>
    // <
  
  );
  }
};


