import styled from "styled-components";

export const Logo = styled.div`
  color: ${(props) => props.theme.logoColor};
  margin-right: auto;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Mode = styled.div`
  color: ${(props) => props.theme.mode};
  font-size: 13px;
  font-weight: 700;
  position: relative;
  right: 20px;
  letter-spacing: 2.5px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Header = styled.div`
  width: 327px;
  height: 38px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 31px;
  @media (min-width: 768px) {
    width: 573px;
  }
  @media (min-width: 1440px) {
    width: 730px;
    position: relative;
    left: 230px;
  }
`;
