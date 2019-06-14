import React from "react";
import GlobalStyle, {Container} from "./components/styled/GlobalStyle";
import Navigation from './components/navigation/Navigation'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Navigation />
        <h1>Welcome</h1>
      </Container>
    </React.Fragment>
  );
}

export default App;
