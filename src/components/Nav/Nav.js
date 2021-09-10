import React from "react";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import { Header, Logo, Mode, Icon } from "./styles";
function Nav({ theme, setTheme }) {
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Header>
      <Logo>devfinder</Logo>
      <Mode>{theme === "light" ? "DARK" : "LIGHT"}</Mode>
      <Icon
        src={theme === "light" ? moon : sun}
        alt="icon"
        onClick={toggleTheme}
      />
    </Header>
  );
}

export default Nav;
