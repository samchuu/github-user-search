import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Input from "./components/Input/Input";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./styles.css";
import styled from "styled-components";

const LightTheme = {
  pageBackground: "#F6F8FF",
  logoColor: "#222731",
  mode: "#4B6A9B",
  inputBackground: "white",
  inputTextColor: "#4B6A9B",
  userFullName: "#2B3442",
  userJoined: "#697C9A",
};

const DarkTheme = {
  pageBackground: "#141D2F",
  logoColor: "white",
  mode: "white",
  inputBackground: "#1E2A47",
  inputTextColor: "white",
  userFullName: "white",
  userJoined: "white",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

function App() {
  const [theme, setTheme] = useState("dark");
  const [inputText, setInputText] = useState("");
  const [userData, setUserData] = useState("");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Page>
        <Nav theme={theme} setTheme={setTheme} />
        <Input
          theme={theme}
          setTheme={setTheme}
          inputText={inputText}
          setInputText={setInputText}
          userData={userData}
          setUserData={setUserData}
        />
        <Content
          theme={theme}
          setTheme={setTheme}
          userData={userData}
          setUserData={setUserData}
        />
        <Footer
          theme={theme}
          setTheme={setTheme}
          userData={userData}
          setUserData={setUserData}
        />
      </Page>
    </ThemeProvider>
  );
}

export default App;
