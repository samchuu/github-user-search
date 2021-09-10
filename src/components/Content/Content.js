import React from "react";
import {
  UserWrapper,
  User,
  UserLogo,
  UserFullName,
  UserName,
  UserJoined,
  UserDetails,
  UserDescription,
  UserStats,
  UserStatsDescription,
  UserStatsNumber,
} from "./styles";

function Content({ userData }) {
  let apiDate = userData.created_at;
  let timestamp = new Date(apiDate);
  let Day = new Date(timestamp).getDate();
  let Month = new Date(timestamp).toLocaleString("default", { month: "short" });
  let Year = new Date(timestamp).getFullYear();
  let newDateFormat = `${Day} ${Month} ${Year}`;

  return (
    <div className="content">
      <UserWrapper>
        <User>
          <UserLogo src={userData.avatar_url}></UserLogo>
          <UserDetails>
            <UserFullName>
              {userData.name === null ? "Undefined" : userData.name}
            </UserFullName>
            <UserName>@{userData.login}</UserName>
            <UserJoined>Joined {newDateFormat}</UserJoined>
          </UserDetails>
        </User>

        <UserDescription>
          {userData.bio === null
            ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
            : userData.bio}
        </UserDescription>

        <UserStats>
          <div className="user__stats__repos__wrapper">
            <UserStatsDescription>Repos</UserStatsDescription>
            <UserStatsNumber>{userData.public_repos}</UserStatsNumber>
          </div>

          <div className="user__stats__followers__wrapper">
            <UserStatsDescription>Followers</UserStatsDescription>
            <UserStatsNumber>{userData.followers}</UserStatsNumber>
          </div>

          <div className="user__stats__following__wrapper">
            <UserStatsDescription>Following</UserStatsDescription>
            <UserStatsNumber>{userData.following}</UserStatsNumber>
          </div>
        </UserStats>
      </UserWrapper>
    </div>
  );
}

export default Content;
