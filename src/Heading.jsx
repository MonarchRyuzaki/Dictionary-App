import { useState } from "react"
import "./Heading.css"

export default function Heading({word, phonetic, audio}){
    const [audioSrc, setAudioSrc] = useState('');
    const handleClick = () => {
        setAudioSrc(audio);
        playAudio();
      };
    
      const playAudio = () => {
        const audioElement = document.querySelector('audio');
        if (audioElement) {
          audioElement.play();
        }
      };
    return (
        <div className="heading">
            <div className="text">
                <div className="word">{word}</div>
                <div className="phonetic">{phonetic}</div>
            </div>
            <div className="audio">
                <img src="./assets/icon-play.svg" alt="" onClick={handleClick}/>
            </div>
            <audio src={audioSrc} type="mp3"></audio>
        </div>
    )
}