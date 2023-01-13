import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true)
  
  }, [trackUri])
  

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      play={play}
      callback={state => {
        if(!state.isPlaying) setPlay(false)
      }}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
    />
  );
};

export default Player;
