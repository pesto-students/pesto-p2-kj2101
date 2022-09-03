import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = styled.div`
  width: 40%;
  margin: 20px auto;
  min-height: 70px;
  border: solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background: white;
`;

export default function ListContainer() {
  const urlListString = localStorage.getItem("urlList");
  const urlList = urlListString ? JSON.parse(urlListString) : [];
  return (
    <>
      {urlList.length ? (
        <List>
          {urlList.map((url) => (
            <ListItem
              url={url.url}
              shortenedUrl={url.shortenedURL}
              key={url.url + url.shortenedURL}
            />
          ))}
        </List>
      ) : (
        <></>
      )}
    </>
  );
}
