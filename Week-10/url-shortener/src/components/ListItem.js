import React from "react";
import styled from "styled-components";

const ListItemContainer = styled.div`
  width:90%;
  margin: 10px auto;
  height: 60px;
  border: solid black;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.input`
  padding: 5px 10px;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export default function ListItem({url,shortenedUrl}) {
  return (
    <ListItemContainer>
      <div>{url}</div>
      <div>
        {shortenedUrl}
        <Button
          type="button"
          value="Copy"
          onClick={() => {
            navigator.clipboard.writeText(shortenedUrl);
          }}
        />
      </div>
    </ListItemContainer>
  );
}
