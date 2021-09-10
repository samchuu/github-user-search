import styled from "styled-components";

export const UserWrapper = styled.div`
  background-color: ${(props) => props.theme.inputBackground};
  width: 327px;
  height: 517px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 573px;
    height: 481px;
    position: relative;
    top: 15px;
  }
  @media (min-width: 1440px) {
    width: 730px;
    height: 419px;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  width: 234px;
  height: 70px;
  position: relative;
  right: 23px;
  bottom: 112px;
  @media (min-width: 768px) {
    width: 290px;
    position: relative;
    right: 96px;
    bottom: 95px;
  }
  @media (min-width: 1440px) {
    position: relative;
    right: 171px;
    bottom: 60px;
  }
`;

export const UserLogo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
`;

export const UserDetails = styled.div`
  color: white;
  @media (min-width: 768px) {
    height: 110px;
    position: relative;
    left: 20px;
  }
  @media (min-width: 1440px) {
    left: 29px;
  }
`;

export const UserFullName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.userFullName};
  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const UserName = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #0079ff;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const UserJoined = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.theme.userJoined};
  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1440px) {
    position: relative;
    top: 5px;
  }
`;

export const UserDescription = styled.div`
  color: ${(props) => props.theme.inputTextColor};
  position: relative;
  bottom: 75px;
  width: 279px;
  height: 75px;
  font-size: 13px;
  font-weight: 400;
  @media (min-width: 768px) {
    width: 493px;
    height: 50px;
    font-size: 15px;
    position: relative;
    bottom: 30px;
    left: 3px;
  }
  @media (min-width: 1440px) {
    left: 85px;
  }
`;

export const UserStats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 55px;
  right: 5px;
  width: 279px;
  height: 85px;
  background-color: ${(props) => props.theme.pageBackground};
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 493px;
    top: 0px;
  }
  @media (min-width: 1440px) {
    position: relative;
    left: 81px;
    top: -10px;
  }
`;

export const UserStatsDescription = styled.div`
  color: ${(props) => props.theme.inputTextColor};
  font-size: 11px;
  font-weight: 400;
  width: 79px;
  height: 16px;
  text-align: center;
`;

export const UserStatsNumber = styled.div`
  color: ${(props) => props.theme.userFullName};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
