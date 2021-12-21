import React, { useState, useEffect } from "react";
import Player from "./Player/Player";
import { songs } from "./Data";

function Home() {
  localStorage.clear();

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="home">
      <div className="background">
        <h2 className="home-heading">Listen</h2>
      </div>
      <div className="player">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default Home;
