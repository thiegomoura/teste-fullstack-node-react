import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.div`
  display: flex;
  align-items: center;

  svg {
    padding-right: 8px;
  }

  h1 {
    flex: 1;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3
    }
  }

  button {
    width: 150px;
    height: 40px;
    background: #fe8765;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(.2, '#fe8765')};
    }
  }
`;
