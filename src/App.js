import React from "react";
import GlobalStyle, {Container} from "./components/styled/GlobalStyle";
import Navigation from './components/navigation/Navigation'
import Carousel from './components/carousel/Carousel'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Navigation />
        <Carousel />
      </Container>
    </React.Fragment>
  );
}

export default App;
