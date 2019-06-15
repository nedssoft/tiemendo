import React from "react";
import GlobalStyle, {Container} from "./components/styled/GlobalStyle";
import Navigation from './components/navigation/Navigation'
import Carousel from './components/carousel/Carousel'
import HomePage from './components/home/HomePage'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Navigation />
        <Carousel />
        <HomePage />
      </Container>
    </React.Fragment>
  );
}

export default App;
