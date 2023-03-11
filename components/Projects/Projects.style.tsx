import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
export const ProjectsWrapper = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    padding: "8px",
  },
}));

export const ProjectImg = styled("img")(({ theme }) => ({
  width: "40%",
  height: "100%",
  borderRadius: "10px",
  "@media (max-width: 900px)": {
    width: "95%",
  },
}));

export const ProjectLink = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  paddingTop: "1.3rem",
  "@media (max-width: 900px)": {
    paddingTop: "0.7rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const ProjectDeployment = styled("a")(({ theme }) => ({
  borderRadius: "10px",
  borderWidth: "1.5px",
  borderColor: theme.palette.secondary.dark,
  borderStyle: "solid",
  fontSize: "1rem",
  fontFamily: "Montserrat",
  textDecoration: "none",

  padding: "8px",
  color: theme.palette.secondary.main,
}));
export const ProjectGithub = styled("a")(({ theme }) => ({
  borderRadius: "10px",
  borderWidth: "1.5px",
  borderColor: theme.palette.secondary.dark,
  borderStyle: "solid",
  fontSize: "1rem",
  fontFamily: "Montserrat",
  textDecoration: "none",

  padding: "8px",
  color: theme.palette.secondary.main,
}));
export const ProjectDetail = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: "1rem",
  paddingTop: "10px",
}));
export const ProjectName = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: "580",
  color: theme.palette.secondary.main,
}));
export const ProjectSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  padding: "50px",
  "@media (max-width: 900px)": {
    padding: "15px",
    width: "100%",
  },
}));

export const ProjectWrapper = styled(Box)(({ theme }) => ({
  padding: "40px",
  "@media (max-width: 900px)": {
    padding: "0px",
  },
}));
