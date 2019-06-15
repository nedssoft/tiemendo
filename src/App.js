import React from "react";
import { Route } from 'react-router-dom'
import GlobalStyle, {Container} from "./components/styled/GlobalStyle";
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/footer'
import LandingPage from './container/Landing'
import AboutPage from './components/about/About'


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Navigation />
         <Route exact path="/" component={LandingPage} />
         <Route exact path="/about-us" component={AboutPage} />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
