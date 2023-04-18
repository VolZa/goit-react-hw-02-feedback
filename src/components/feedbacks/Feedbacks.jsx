import { Component } from 'react';
import { PropTypes } from "prop-types";

import { Feedback } from "./Feedbacks.styled";


export class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
   return (
    <Feedback>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </Feedback>
    );
 }
}



