import React from "react";
import {
  ExperienceWrapper,
  CompanyName,
  RoleDetails,
  WorkDone,
  Task,
} from "./Experience.style";
import { Typography, useTheme } from "@mui/material";

const Experience = () => {
  const theme = useTheme();
  return (
    <>
      {" "}
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "550",
          textAlign: "center",
          paddingTop: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Experience
      </Typography>
      <ExperienceWrapper>
        <CompanyName>
          Exhime
          <span
            style={{
              color: theme.palette.primary.main,
              fontSize: "1rem",
              paddingLeft: "1rem",
            }}
          >
            Front-end Developer Intern from December 2022 to Current{" "}
          </span>
        </CompanyName>
        <WorkDone>
          <Task>
            Implemented API data caching using
            <span
              style={{ fontWeight: "600", color: theme.palette.primary.main }}
            >
              {" "}
              TanStack React Query
            </span>{" "}
            ,resulting in ~70% reduction in network requests.
          </Task>
          <Task>
            Created beautiful and scalable UI components using
            <span
              style={{ fontWeight: "600", color: theme.palette.primary.main }}
            >
              {" "}
              Material UI
            </span>{" "}
            and
            <span
              style={{ fontWeight: "600", color: theme.palette.primary.main }}
            >
              {" "}
              Styled-components
            </span>
          </Task>
          <Task>
            <span
              style={{ fontWeight: "600", color: theme.palette.primary.main }}
            >
              SEO{" "}
            </span>
            Enhanced by ~80% by implementing Server Side Rendering and Static
            Side Generation using
            <span
              style={{ fontWeight: "600", color: theme.palette.primary.main }}
            >
              Next-js
            </span>
            .
          </Task>
        </WorkDone>
      </ExperienceWrapper>
    </>
  );
};

export default Experience;
