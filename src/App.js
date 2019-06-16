import React from "react";
import { Route, Switch } from 'react-router-dom'
import GlobalStyle, {Container} from "./components/styled/GlobalStyle";
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/footer'
import LandingPage from './container/Landing'
import AboutPage from './components/about/About'
import NotFound from './components/error/NotFound'


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Navigation />
         <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about-us" component={AboutPage} />
          <Route path="*" component={NotFound} />
         </Switch>
        <Footer />
      </Container>
      
    </React.Fragment>
  );
}

export default App;
