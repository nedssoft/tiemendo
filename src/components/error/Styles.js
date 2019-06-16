import styled from 'styled-components'
import { primary_color, white_color, black_color } from '../styled/variables'
import { GetStarted } from '../styled/Buttons'

export const Container = styled.div`
  background: ${primary_color};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${white_color};
  h1 {
    font-size: 10rem;
    span {
      padding: 0 0.8rem;
    }
  }
  p {
    font-size: 4rem;
  }
`
export const Button = styled(GetStarted)`
 color: ${black_color};
&:hover {
  color: ${white_color};
}
`