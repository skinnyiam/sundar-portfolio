import React from "react";
import { AboutWrapper, AboutMeText } from "./About.style";
import { Typography, useTheme } from "@mui/material";
import Experience from "../Experience/Experience";
const About = () => {
  const theme = useTheme();
  return (
    <div id="about">
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "550",
          textAlign: "center",
          paddingTop: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        About Me
      </Typography>
      <AboutWrapper>
        <AboutMeText>
          I&apos;m a Full-Stack Developer in MERN technology, moslty proficient
          in Front-End part. I&apos;ve also done UI designing to bring more
          perfection in my Front-End skill.
          <br />
          As a part of hobby , i play guitar and spill emotions into lyrics.
        </AboutMeText>
        <AboutMeText>
          To improve my programming skill/Data Structures i&apos;ve been doing
          Leetcode and solved over 200+ questions.
        </AboutMeText>
      </AboutWrapper>
      <Experience />
    </div>
  );
};

export default About;
