import React from "react";
import locationdark from "../../assets/images/locationdark.svg";
import locationlight from "../../assets/images/locationlight.svg";
import websitedark from "../../assets/images/websitedark.svg";
import websitelight from "../../assets/images/websitelight.svg";
import twitterdark from "../../assets/images/twitterdark.svg";
import twitterlight from "../../assets/images/twitterlight.svg";
import organizationdark from "../../assets/images/organizationdark.svg";
import organizationlight from "../../assets/images/organizationlight.svg";
import {
  UserFooter,
  UserFooterImage,
  UserFooterDescription,
  UserFooterTwitter,
  UserFooterWrapper,
  UserFooterLocation,
  UserFooterWebsite,
  UserFooterSocialMedia,
  UserFooterOrganization,
} from "./styles";
function Footer({ theme, userData }) {
  return (
    <UserFooter>
      <UserFooterWrapper>
        <UserFooterLocation>
          <UserFooterImage
            src={theme === "light" ? locationlight : locationdark}
            alt="location"
          />
          <UserFooterDescription>
            {userData.location === null ? "Not Available" : userData.location}
          </UserFooterDescription>
        </UserFooterLocation>

        <UserFooterWebsite>
          <UserFooterImage
            src={theme === "light" ? websitelight : websitedark}
            alt="location"
          />
          <UserFooterDescription>
            {userData.blog === "" ? "Not Available" : userData.blog}
          </UserFooterDescription>
        </UserFooterWebsite>

        <UserFooterSocialMedia>
          <UserFooterImage
            src={theme === "light" ? twitterlight : twitterdark}
            alt="location"
          />
          <UserFooterTwitter>
            {userData.twitter_username === null
              ? "Not Available"
              : userData.twitter_username}
          </UserFooterTwitter>
        </UserFooterSocialMedia>

        <UserFooterOrganization>
          <UserFooterImage
            src={theme === "light" ? organizationlight : organizationdark}
            alt="location"
          />
          <UserFooterDescription className="user__footer__organization">
            {userData.company === null ? "@github" : userData.company}
          </UserFooterDescription>
        </UserFooterOrganization>
      </UserFooterWrapper>
    </UserFooter>
  );
}

export default Footer;
