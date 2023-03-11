import React from "react";
import {
  ProjectsWrapper,
  ProjectDeployment,
  ProjectDetail,
  ProjectGithub,
  ProjectImg,
  ProjectLink,
  ProjectName,
  ProjectSection,
  ProjectWrapper,
} from "./Projects.style";
import { Typography, useTheme } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  return (
    <div id="projects">
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "550",
          textAlign: "center",
          paddingTop: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Projects
      </Typography>
      <ProjectWrapper>
        <ProjectsWrapper>
          <ProjectImg src="./demo.png" />
          <ProjectSection>
            <ProjectName>Moments (MERN app)</ProjectName>
            <ProjectDetail>
              A social media app for capturing moments where user can save their
              loving memories.
            </ProjectDetail>
            <ProjectLink>
              <ProjectGithub href="/">Github</ProjectGithub>
              <ProjectDeployment href="/">Website</ProjectDeployment>
            </ProjectLink>
          </ProjectSection>
        </ProjectsWrapper>
        <ProjectsWrapper>
          <ProjectImg src="./recipeas.png" />

          <ProjectSection>
            <ProjectName>RECIPEAS (Next-js app)</ProjectName>
            <ProjectDetail>
              A web app for food lovers to find new recipes in detailed manner
              to cook favourite meals.
            </ProjectDetail>
            <ProjectLink>
              <ProjectGithub href="/">Github</ProjectGithub>
              <ProjectDeployment href="/">Website</ProjectDeployment>
            </ProjectLink>
          </ProjectSection>
        </ProjectsWrapper>
        <ProjectsWrapper>
          <ProjectImg src="./codespace.png" />

          <ProjectSection>
            <ProjectName>Codespace (Next-js app)</ProjectName>
            <ProjectDetail>
              A web app for coders can save their daily useful resource and
              assign their task.
            </ProjectDetail>
            <ProjectLink>
              <ProjectGithub href="/">Github</ProjectGithub>
              <ProjectDeployment href="/">Website</ProjectDeployment>
            </ProjectLink>
          </ProjectSection>
        </ProjectsWrapper>
      </ProjectWrapper>
    </div>
  );
};

export default Projects;
