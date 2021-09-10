import React, { useEffect } from "react";
import search from "../../assets/images/search.svg";
import axios from "axios";
import { InputWrapper, SearchImage, SearchInput, Button } from "./styles";
function Input({ inputText, setInputText, userData, setUserData }) {
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/samchuu`)
      .then((data) => setUserData(data.data));
  }, []);
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = () => {
    axios
      .get(`https://api.github.com/users/${inputText}`)
      .then((data) => setUserData(data.data));
  };

  return (
    <div className="input">
      <InputWrapper>
        <SearchImage src={search} alt="" />
        <SearchInput
          type="text"
          placeholder="Search GitHub username..."
          onChange={inputTextHandler}
        />
        <Button onClick={submitHandler}>Search</Button>
      </InputWrapper>
    </div>
  );
}

export default Input;
