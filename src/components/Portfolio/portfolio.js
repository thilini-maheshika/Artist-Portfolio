import React, { useState, useRef, useEffect } from "react";
import "./portfolio.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Lilyimg from "../../assets/img/lily.jpg";
import LilyAudio from "../../assets/audio/Lily.mp3";
import Faded from "../../assets/img/faded.jpeg";
import FadedAudio from "../../assets/audio/Faded.mp3";
import Alone from "../../assets/img/alone.jpeg";
import AloneAudio from "../../assets/audio/Alone.mp3";

function Portfolio() {
  const theme = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAudio, setActiveAudio] = useState(null);

  const audioRefs = {
    LilyAudio: useRef(new Audio(LilyAudio)),
    FadedAudio: useRef(new Audio(FadedAudio)),
    AloneAudio: useRef(new Audio(AloneAudio)),
  };

  const togglePlayPause = (audioKey) => {
    const audioRef = audioRefs[audioKey];

    if (activeAudio === audioKey) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      Object.keys(audioRefs).forEach((key) => {
        audioRefs[key].current.pause();
      });
      audioRef.current.play();
      setActiveAudio(audioKey);
    }
    setIsPlaying(!audioRef.current.paused);
  };

  useEffect(() => {
    const updateProgress = (audioKey) => {
      const progressLine = document.querySelector(`.progress-line-${audioKey}`);
      const audioRef = audioRefs[audioKey].current;

      if (progressLine) {
        progressLine.style.width = `${
          (audioRef.currentTime / audioRef.duration) * 100
        }%`;
      }
    };

    Object.keys(audioRefs).forEach((key) => {
      const audioRef = audioRefs[key].current;
      audioRef.addEventListener("timeupdate", () => updateProgress(key));
    });

    return () => {
      Object.keys(audioRefs).forEach((key) => {
        const audioRef = audioRefs[key].current;
        audioRef.removeEventListener("timeupdate", () => updateProgress(key));
      });
    };
  }, []);

  const handleProgressClick = (e, audioKey) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / progressBar.clientWidth) * audioRefs[audioKey].current.duration;
    audioRefs[audioKey].current.currentTime = newTime;
  };

  return (
    <section id="about">
      <span className="skillTitle">Explore My Musical Journey</span>
      <br />
      <span className="skillDesc">
        Welcome to my musical portfolio, a kaleidoscope of sonic adventures that
        have shaped my life's passion. I invite you to immerse yourself in the
        world of melodies, rhythms, and emotions that I've crafted over the
        years. Thank you for taking the time to explore my musical world.
        <br />
        <br />
      </span>
      <div className="audio-container">
        <div className="audiocard">
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={Lilyimg}
              alt="Live from space album cover"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton aria-label="play/pause" onClick={() => togglePlayPause("LilyAudio")}>
                {activeAudio === "LilyAudio" && isPlaying ? (
                  <PauseIcon
                    sx={{
                      height: 38,
                      width: 38,
                      fontSize: "2rem",
                      color: "red",
                    }}
                  />
                ) : (
                  <PlayArrowIcon
                    sx={{
                      height: 38,
                      width: 38,
                      fontSize: "2rem",
                      color: "rgb(70, 73, 70)",
                    }}
                  />
                )}
              </IconButton>

              <div className={`audio-progress progress-line-LilyAudio`} onClick={(e) => handleProgressClick(e, "LilyAudio")}>
                <div
                  className={`progress-line progress-line-LilyAudio`}
                  style={{
                    width: `${
                      (audioRefs["LilyAudio"].current.currentTime /
                        audioRefs["LilyAudio"].current.duration) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </Box>
          </Card>
        </div>

        <div className="audiocard">
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={Faded}
              alt="Live from space album cover"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton aria-label="play/pause" onClick={() => togglePlayPause("FadedAudio")}>
                {activeAudio === "FadedAudio" && isPlaying ? (
                  <PauseIcon
                    sx={{
                      height: 38,
                      width: 38,
                      fontSize: "2rem",
                      color: "red",
                    }}
                  />
                ) : (
                  <PlayArrowIcon
                    sx={{
                      height: 38,
                      width: 38,
                      fontSize: "2rem",
                      color: "rgb(70, 73, 70)",
                    }}
                  />
                )}
              </IconButton>

              <div className={`audio-progress progress-line-FadedAudio`} onClick={(e) => handleProgressClick(e, "FadedAudio")}>
                <div
                  className={`progress-line progress-line-FadedAudio`}
                  style={{
                    width: `${
                      (audioRefs["FadedAudio"].current.currentTime /
                        audioRefs["FadedAudio"].current.duration) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </Box>
          </Card>
        </div>

        <div className="audiocard">
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={Alone}
              alt="Live from space album cover"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton aria-label="play/pause" onClick={() => togglePlayPause("AloneAudio")}>
                {activeAudio === "AloneAudio" && isPlaying ? (
                  <PauseIcon
                    sx={{
                      height: 38,
                      width: 38,
                      fontSize: "2rem",
                      color: "red",
                    }}
                  />
                ) : (
                  <PlayArrowIcon
                    sx={{
                      height: 38,
                      width: 38,
                      fontSize: "2rem",
                      color: "rgb(70, 73, 70)",
                    }}
                  />
                )}
              </IconButton>

              <div className={`audio-progress progress-line-AloneAudio`} onClick={(e) => handleProgressClick(e, "AloneAudio")}>
                <div
                  className={`progress-line progress-line-AloneAudio`}
                  style={{
                    width: `${
                      (audioRefs["AloneAudio"].current.currentTime /
                        audioRefs["AloneAudio"].current.duration) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </Box>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
