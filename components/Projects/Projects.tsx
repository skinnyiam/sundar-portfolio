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
          <ProjectImg src="./blogAi.png" alt="Blog.Ai (in development)" />
          <ProjectSection>
            <ProjectName>Blog.Ai (NextJs app) (currently working)</ProjectName>
            <ProjectDetail>
              A web app for creating blogs with pictures just by entering the
              title of blog using ChatGPT .
            </ProjectDetail>
            <ProjectLink>
              <ProjectGithub href="https://github.com/skinnyiam/Blog.Ai">
                Github
              </ProjectGithub>
              {/* <ProjectDeployment href="/">Website</ProjectDeployment> */}
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
              <ProjectGithub href="https://github.com/skinnyiam/Recipeas">
                Github
              </ProjectGithub>
              <ProjectDeployment href="https://recipeas-zeta.vercel.app/">
                Website
              </ProjectDeployment>
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
              <ProjectGithub href="https://github.com/skinnyiam/codespace">
                Github
              </ProjectGithub>
              <ProjectDeployment href="https://codespace-xi.vercel.app/">
                Website
              </ProjectDeployment>
            </ProjectLink>
          </ProjectSection>
        </ProjectsWrapper>
      </ProjectWrapper>
    </div>
  );
};

export default Projects;
