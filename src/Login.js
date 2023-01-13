import React from "react";
import randomstring from "randomstring";

import { Container } from "react-bootstrap";

const redirect_uri = "https://jccifuentes21.github.io/spotify-with-lyrics-Frontend";
const client_id = "fe41d1c79edf44f289bf3301b835bbbd";
const state = randomstring.generate(16);
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&state=${state}&redirect_uri=${redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With spotify
        </a>
      </Container>
    </>
  );
};

export default Login;
