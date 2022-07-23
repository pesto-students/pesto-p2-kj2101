import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
  width: 40%;
  margin: auto;
  height: 60px;
  border: solid black;
  display: flex;
  padding: 10px;
  align-items: center;
  background: white;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 5px;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  padding: 5px 10px;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export default function ListInput({ setIsLoading }) {
  const inputRef = useRef(null);
  const [url, setUrl] = useState("");
  const shortenURL = async (event) => {
    event.preventDefault();
    inputRef.current.blur();
    setIsLoading(true);
    if (url.trim().length === 0) {
      alert("write url");
      setIsLoading(false);
      return;
    }
    let response;
    try {
      response = await axios.get("https://api.shrtco.de/v2/shorten?url=" + url);
      console.log(url, response.data.ok);
      const result = response.data;
      const shortenedURL = "https://shrtco.de/" + response.data.result.code;
      console.log(result);
      let urlList = localStorage.getItem("urlList")
        ? JSON.parse(localStorage.getItem("urlList"))
        : [];
      localStorage.setItem(
        "urlList",
        JSON.stringify([...urlList, { url, shortenedURL }])
      );
      setIsLoading(false);
      setUrl("");
    } catch {
      setUrl("");
      setIsLoading(false);
      alert("incorrect url");
    }
  };
  return (
    <Form onSubmit={shortenURL}>
      <Input
        ref={inputRef}
        onChange={(event) => setUrl(event.target.value)}
        value={url}
      />
      <Button type="button" onClick={shortenURL} value="Shorten it" />
    </Form>
  );
}
