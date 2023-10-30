import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);

  // This effect runs once when the component mounts to fetch the initial token
  useEffect(() => {
    const token = Cookies.get("authToken");
    setAuthToken(token);
  }, []);

  const setToken = (token: string) => {
    // Set the token in both state and cookie
    setAuthToken(token);
    Cookies.set("authToken", token);
  };

  const clearToken = () => {
    setAuthToken(undefined);
    Cookies.remove("authToken");
  };

  return { authToken, setToken, clearToken };
};

export default useAuthToken;
