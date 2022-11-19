import React from "react";
import { useState } from "react";
import SingleUser from "./SingleUser";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SingleMessage({ item }) {
  const history = useHistory();

  return (
    <div>
      <div>
        <div>
          <div>
            <br />
            <span>{item.content}, </span>
            <span>
              from <b>{item.sender}</b>{" "}
            </span>
          </div>
          <div>
            <span>{item.timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMessage;
