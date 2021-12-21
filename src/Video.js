import React from "react";
import ReactPlayer from "react-player";
import { url } from "./Data";
// import Axios from "axios";
function Video() {
  // const [videos, setVideos] = useState([]);
  // const links = () => {
  //   Axios.get("http://localhost:3001/videos").then((response) => {
  //     const data = response.data;
  //     console.log(data);
  //     setVideos(data);
  //   });
  // };
  // links();
  return (
    <div className="video">
      <div className="main-container">
        <h2 className="heading">Videos</h2>
        <div className="underline"></div>

        <div className="contain">
          {url.map((link) => {
            const { id, url, name } = link;
            return (
              <>
                <div className="container" key={id}>
                  <div className="title-container">
                    <h4 className="video-title">{name}</h4>
                  </div>
                  <div className="video-container">
                    <ReactPlayer
                      url={url}
                      className="player"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Video;
