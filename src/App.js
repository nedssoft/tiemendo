import React from "react";
import GlobalStyle, {Container} from "./components/styled/GlobalStyle";
import Navigation from './components/navigation/Navigation'
import Carousel from './components/carousel/Carousel'
import HomePage from './components/home/HomePage'
import Footer from './components/footer/Footer'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Navigation />
        <Carousel />
        <HomePage />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
