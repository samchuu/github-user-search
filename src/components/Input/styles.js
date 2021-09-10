import styled from "styled-components";

export const InputWrapper = styled.div`
  background-color: ${(props) => props.theme.inputBackground};
  width: 327px;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  @media (min-width: 768px) {
    width: 573px;
    height: 69px;
  }
  @media (min-width: 1440px) {
    width: 730px;
    height: 69px;
  }
`;
export const SearchInput = styled.input`
  width: 254px;
  height: 25px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.inputBackground};
  margin-left: 43px;
  color: ${(props) => props.theme.inputTextColor};
`;

export const SearchImage = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 16px;
`;

export const Button = styled.button`
  background-color: #0279ff;
  width: 84px;
  height: 46px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 14px;
  position: absolute;
  right: 7px;
  color: white;
  cursor: pointer;
`;
