import styled from 'styled-components';
import { shade } from 'polished';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
`;

export const ModalWrapper = styled.div`
    background-color: #fff;
    border-radius: 10px;
    h1 {
        
    }
    div {

    }
    footer {
        margin-top: 8px;
        display: flex;
        justify-content: flex-end;
        button {
        margin: 8px;  
        width: 150px;
    height: 40px;
    background: #fe8765;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(.2, '#fe8765')};
    } 
        }
    }
`;

export const Form = styled.form`
input {
    height: 40px;
    padding: 0 8px;
    border: 0;
    border-bottom: 2px solid #dedede;
    border-radius: 5px;
    
    & + input {
        margin-left: 8px;
    }

    &::placeholder {
      color: #a8a8b3
    }
  }

textarea {
    color: gray;
    border: 0;
    margin: 16px 0;
    padding: 0 8px;
    border-bottom: 2px solid #dedede;
    border-radius: 10px;
}
label {
    color: 
}`;

