import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Uploads() {
  const token = localStorage.getItem("token");
  let history = useHistory();
  if (!token) {
    history.push("/home");
  }

  return (
    <div className="uploads">
      <h2 className="upload-heading">uploads</h2>
      <div className="underline"></div>

      <div className="button-container">
        <div className="upload-btn">
          <Link to="#">
            <button className="btns">Upload Videos</button>
          </Link>
        </div>
        <div className="upload-btn">
          <Link to="#">
            <button className="btns">Upload News</button>
          </Link>
        </div>
        <div className="upload-btn">
          <Link to="#">
            <button className="btns">Upload Audio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Uploads;
