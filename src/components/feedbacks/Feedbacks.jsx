// import { Component } from 'react';
import { PropTypes } from "prop-types";

import { Feedback } from "./Feedbacks.styled";


export const Feedbacks = ({onLeavefeedback, options}) => {
   return (
    <Feedback>
       <button onClick={() => { onLeavefeedback("good") }}>Good</button>
       <button onClick={() => { onLeavefeedback("neutral") }}>Neutral</button>
       <button onClick={() => { onLeavefeedback("bad") }}>Bad</button>
    </Feedback>
    );
 
}
Feedbacks.propTypes = {
   onLeavefeedback:  PropTypes.func.isRequired,
   options: PropTypes.array.isRequired,
 };

//   render() {
//    return (
//     <Feedback>
//       <button>Good</button>
//       <button>Neutral</button>
//       <button>Bad</button>
//     </Feedback>
//     );
//  }
