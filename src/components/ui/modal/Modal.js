import React from "react";
import styled from "styled-components";

const BackDrop = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 990;
  background: rgba(100, 100, 100, 0.5);
  display: ${props => props.isOpen ? 'block': 'none'};
`;
const Container = styled.div`
  min-height: 200px;
  width: ${props => props.width? props.width: '500px'};
  background: aliceblue;
  position: fixed;
  top: 100px;
  margin: 0 auto;
  left: 30%;
  @media (max-width: 768px) {
    width: 90%;
    left: 40px;
  }
  @media (max-width: 499px) {
    left: 20px;
  }
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1000;
`;
const Title = styled.div`
  width: 100%;
  margin: 1rem auto;
  border-bottom: 1px solid #ccc;
  span {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 1.8rem;
    cursor: pointer;
  }
  h3 {
    font-size: 3rem;
    padding: 0 0.8rem;
  }
`;
const Body = styled.div`
  width: 100%;
`;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  border-top: 1px solid #ccc;
  padding: 0.8rem;
  display: flex;
  justify-content: flex-end;

`

const Button = styled.button`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin: 0.2rem;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background: #ccc;
    color: white;
  }
`

export default function({ children, modalTitle, toggle, clicked, isOpen }) {
  return (
    <BackDrop isOpen={isOpen} onClick={(e) => toggle(e)}>
      <Container>
        <Title>
          <h3>{modalTitle ? modalTitle : 'Modal Title'}</h3>
          <span onClick={() => toggle()}>X</span>
        </Title>
        <Body>{children}</Body>
        <Footer>
          <Button onClick={() => clicked()}>Continue</Button>
          <Button onClick={(e) => toggle(e)}>Cancel</Button>
        </Footer>
      </Container>
    </BackDrop>
  );
}
