import { useState } from "react";
import "../styles/Heading.css";

export default function Heading({ word, phonetic, audio }) {
  const [audioSrc, setAudioSrc] = useState("");
  const handleClick = () => {
    setAudioSrc(audio);
    playAudio();
  };

  const playAudio = () => {
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      audioElement.play();
    }
  };
  const src = "/assets/images/";
  return (
    <div className="heading">
      <div className="text">
        <div className="word">{word}</div>
        <div className="phonetic">{phonetic}</div>
      </div>
      <div className="audio">
        <img src={src + "icon-play.svg"} alt="" onClick={handleClick} />
      </div>
      <audio src={audioSrc} type="mp3"></audio>
    </div>
  );
}
