import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: center;
  span {
    flex: 1;
    font-size: 24px;
    text-transform: uppercase;    
  }

  svg {
    color: #3a3a3f;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 960px;
`;

export const Cars = styled.div`
  margin-top: 20px;
  max-width: 400px;
  flex: 1;

  > span {
      color: #3a3a3f;
      font-size: 16px;
    }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
  
    transition: transform 0.2s;

    & + a {
      margin-top: 4px;
    }

    &:hover{
      transform: translateX(5px);
    }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 20px;
      color: #3d3d3d;
    }

    span {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;  
    }
  }

  svg {
    margin-left: auto;
    color: green;
  }

}

`;

export const Info = styled.div`
margin-top: 20px;
margin-left: 16px;
  > span {
      color: #3a3a3f;
      font-size: 16px;
    }
    
  > div {
      max-width: 500px;
      background: #fff;
      padding: 24px;
      border-radius: 5px;

      display: flex;
      flex-direction: column;

      p {
        font-size: 16px;
        font-weight: 300;
  
        & + p {
          margin-top: 8px;
        }
      }

    > strong {
      font-size: 20px;
      color: green;
    }

    div {
      display: flex;
      padding: 16px 0px;

      strong {
        font-size: 18px;
        margin-right: 8px;
      }
      span {
        font-size: 18px;
        color: gray;
        margin-right: 145px;
      }
    }
  }

  div.footer {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    background: #a1a1a1;
    border-radius: 5px;
    border: 0;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(.2, '#a1a1a1')};
    }

    svg {
      margin-right: 4px;
    }
    
  }
  }
`;

