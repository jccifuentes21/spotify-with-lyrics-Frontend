import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = (code, state) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .post("https://spotify-plus-lyrics.herokuapp.com/login", {
        code,
        state,
      })
      .then((res) => {
        setAccessToken(res.data.access_token);
        setRefreshToken(res.data.refresh_token);
        setExpiresIn(res.data.expires_in);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        window.location = "/";
      });
    return () => {
      controller.abort();
    };
  }, [code, state]);

  useEffect(() => {
    const controller = new AbortController();

    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post("https://spotify-plus-lyrics.herokuapp.com/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.access_token);
          setExpiresIn(res.data.expires_in);
        })
        .catch((err) => {
          window.location = "/";
          console.log(err);
        });
    }, (expiresIn - 60) * 1000);
    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, [refreshToken, expiresIn]);

  return accessToken
};

export default useAuth;
