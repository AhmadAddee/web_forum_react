import { useState, useEffect, createContext, useContext } from "react";
import { useToken } from "./useToken";
const userContext = createContext();

export const useUser = () => {
  const [token] = useToken();

  const getPayloadFromToken = (token) => {
    const encodedPayload = token; //.split(".")[1];
    console.log(encodedPayload);
    return JSON.parse(encodedPayload);
  };

  const getToken = (token) => {
    return token === null ? null : token;
  };

  const [user, setUser] = useState(() => {
    if (!token) return null;
    return getPayloadFromToken(token);
    //return getToken(token);
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getToken(token));
    }
  }, [token]);

  console.log("Here in useUser", user);

  return user;
};
