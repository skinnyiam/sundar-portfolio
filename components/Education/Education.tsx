import React from "react";
import {
  EducationWrapper,
  EducationField,
  EducationInstitute,
  EducationSection,
  EducationYear,
} from "./Education.style";
import { Typography, useTheme } from "@mui/material";

const Education = () => {
  const theme = useTheme();
  return (
    <div id="education">
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "550",
          textAlign: "center",
          paddingTop: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Education
      </Typography>
      <EducationWrapper>
        <EducationSection>
          <EducationYear>2020-Present</EducationYear>
          <EducationInstitute>
            I.E.T. Rohilkhand University, Bareilly
          </EducationInstitute>
          <EducationField>
            Bachelor of Technology in Computer Science & Information Technology
          </EducationField>
        </EducationSection>
        <EducationSection>
          <EducationYear>2017-2019</EducationYear>
          <EducationInstitute>P.D Academy - 12th</EducationInstitute>
          <EducationField>Percentage: 86%</EducationField>
        </EducationSection>
        <EducationSection>
          <EducationYear>2015-2017</EducationYear>
          <EducationInstitute>P.D Academy - 10th</EducationInstitute>
          <EducationField>Percentage: 86%</EducationField>
        </EducationSection>
      </EducationWrapper>
    </div>
  );
};

export default Education;
