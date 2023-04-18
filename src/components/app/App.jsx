
import { Component } from 'react';
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { Feedbacks } from "../feedbacks/Feedbacks";

export class App extends Component {

  render() {
      return (
    <Container
      
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
    
      <GlobalStyle />
      React homework template
      <Feedbacks />
    </Container>
    // <
  
  );
  }
};

// export const App = () => {

 
//       return (
//     <Container
      
//       // style={{
//       //   height: '100vh',
//       //   display: 'flex',
//       //   justifyContent: 'center',
//       //   alignItems: 'center',
//       //   fontSize: 40,
//       //   color: '#010101'
//       // }}
//     >
    
//       <GlobalStyle />
//       React homework template
//       <Feedbacks />
//     </Container>
//     // <
  
//   );
  
// };
