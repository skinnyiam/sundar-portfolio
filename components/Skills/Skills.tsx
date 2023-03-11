import React from "react";
import {
  SkillsWrapper,
  SkillBox,
  SkillName,
  SkillSection,
  Skill,
} from "./Skills.style";
import { Typography, useTheme } from "@mui/material";

const Skills = () => {
  const theme = useTheme();
  return (
    <div id="skills">
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "550",
          textAlign: "center",
          paddingTop: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Skills
      </Typography>
      <SkillsWrapper>
        <SkillSection>
          <SkillName>NEXT-JS</SkillName>
          <SkillBox>
            <Skill></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>REACT-JS</SkillName>
          <SkillBox>
            <Skill sx={{ width: "100%" }}></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>NODE-JS</SkillName>
          <SkillBox>
            <Skill sx={{ width: "90%" }}></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>EXPRESS-JS</SkillName>
          <SkillBox>
            <Skill></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>MONGO-DB</SkillName>
          <SkillBox>
            <Skill sx={{ width: "92%" }}></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>FIREBASE</SkillName>
          <SkillBox>
            <Skill></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>GIT & GITHUB</SkillName>
          <SkillBox>
            <Skill sx={{ width: "92%" }}></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>POSTMAN</SkillName>
          <SkillBox>
            <Skill></Skill>
          </SkillBox>
        </SkillSection>
        <SkillSection>
          <SkillName>FIGMA</SkillName>
          <SkillBox>
            <Skill sx={{ width: "80%" }}></Skill>
          </SkillBox>
        </SkillSection>

        <SkillSection>
          <SkillName>JAVASCRIPT</SkillName>
          <SkillBox>
            <Skill sx={{ width: "80%" }}></Skill>
          </SkillBox>
        </SkillSection>
      </SkillsWrapper>
    </div>
  );
};

export default Skills;
