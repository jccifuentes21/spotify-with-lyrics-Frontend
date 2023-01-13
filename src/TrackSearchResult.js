import React from "react";

const TrackSearchResult = ({ track, chooseTrack }) => {

  const handlePlay = () =>{
    chooseTrack(track)
  }
  return (
    <div className="d-flex m-2 aling-items-center" style={{ cursor: "pointer"}} onClick={handlePlay}>
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ms-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
};

export default TrackSearchResult;
