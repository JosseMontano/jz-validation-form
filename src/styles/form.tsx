import styled from 'styled-components';

export const Button = styled.button<{ ColorBtn: string; ColorTxt?: string }>`
  background-color: ${props => props.ColorBtn};
  color: ${props => (props.ColorTxt ? props.ColorTxt : '#fff')};
  padding: 0.5rem;
  border: none;
  border-radius: 2rem;
  width: 100%;
  margin-top: 10px;
  font-size: 15px;
  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 10px;
  border-radius: 0.2rem;
  border: none;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  width: 90%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;
export const TextArea = styled.textarea`
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 10px;
  border-radius: 0.2rem;
  border: none;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  width: 90%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;
export const Label = styled.label<{ colorText?: string }>`
  font-size: 22px;
  margin-top: 10px;
  color: ${props => (props.colorText ? props.colorText : '#000')};
`;
export const MsgError = styled.p<{ colorText?: string }>`
  font-weight: bold;
  color: ${props => (props.colorText ? props.colorText : '#dc3545')};
`;

