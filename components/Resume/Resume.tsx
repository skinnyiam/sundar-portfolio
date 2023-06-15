import React from "react";
import { ResumeWrapper, ResumeImg, ViewButton } from "./Resume.style";
import { Typography, useTheme } from "@mui/material";

const Resume = () => {
  const theme = useTheme();
  return (
    <div id="resume">
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "550",
          textAlign: "center",
          paddingTop: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Resume
      </Typography>
      <ResumeWrapper>
        <ViewButton href="https://drive.google.com/file/d/1SG_xyuSTpDkE8Ewt-BMSWnget4M0poWP/view?usp=sharing">
          View Resume
        </ViewButton>
        <ResumeImg src="/resume.png" />
      </ResumeWrapper>
    </div>
  );
};

export default Resume;
