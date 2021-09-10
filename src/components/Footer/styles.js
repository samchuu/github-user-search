import styled from "styled-components";
export const UserFooterImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const UserFooter = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 13px;
  margin-top: 10px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 15px;
  } */

  height: 127px;
  position: relative;
  top: 540px;
`;

export const UserFooterWrapper = styled.div`
  position: absolute;
  width: 273px;
  right: 35px;
  @media (min-width: 768px) {
    right: 80px;
    top: 20px;
    width: 459px;
    height: 63px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "location twitter"
      "website organization";
  }
  @media (min-width: 1440px) {
    position: relative;
    bottom: 50px;
    right: 300px;
    top: -20px;
  }
`;
export const UserFooterLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  margin-top: 10px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 15px;
    grid-area: location;
  }
`;

export const UserFooterWebsite = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  margin-top: 10px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 15px;
    grid-area: website;
  }
  @media (min-width: 1440px) {
    margin-top: 19px;
  }
`;

export const UserFooterSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  margin-top: 10px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 15px;
    grid-area: twitter;
    position: relative;
    left: 50px;
  }
  @media (min-width: 1440px) {
    margin-top: 19px;
  }
`;

export const UserFooterOrganization = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  margin-top: 10px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 15px;
    grid-area: organization;
    position: relative;
    left: 50px;
  }
  @media (min-width: 1440px) {
    margin-top: 19px;
  }
`;

export const UserFooterDescription = styled.div`
  color: ${(props) => props.theme.mode};
  margin-left: 10px;
`;
export const UserFooterTwitter = styled.div`
  color: #808898;
  margin-left: 10px;
`;
