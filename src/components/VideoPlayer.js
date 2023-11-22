import React from "react";
import { FaChalkboard, FaChalkboardTeacher } from "react-icons/fa";
import image1 from "../images/1.jpeg";
import image2 from "../images/2.jpeg";

function VideoPlayer() {
  return (
    <div className="videoabar">
      <div className="videoleft">
        <div className="vlphoto">
          <img src={image1} alt="asfd"></img>
          <img src={image2} alt="asfd"></img>
        </div>
        <div className="videooption">
          <ul>
            <li>
              <a href="2">
                <FaChalkboard /> Classroom
              </a>
            </li>
            <li>
              <a href="3">
                <FaChalkboardTeacher /> Whiteboard
              </a>
            </li>
          </ul>
        </div>
      </div>
      <iframe
        width="1271"
        height="715"
        src="https://www.youtube.com/embed/UT8y-xK10jE"
        title="love Mashup Slowed &amp; Reverb  Romantic mashup = lo-fi  Mashup lofi Boys"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
