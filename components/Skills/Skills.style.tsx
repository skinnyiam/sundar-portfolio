import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
export const SkillsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "5px",
  alignItems: "center",
}));

export const SkillSection = styled(Box)(({ theme }) => ({
  padding: "30px",
  width: "90%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));

export const SkillName = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "550",
  display: "inline-block",
  color: theme.palette.secondary.main,
}));
export const SkillBox = styled(Box)(({ theme }) => ({
  borderWidth: "1.5px",
  borderColor: theme.palette.secondary.dark,
  borderStyle: "solid",
  fontFamily: "Montserrat",
  textDecoration: "none",
  width: "70%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));

export const Skill = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  width: "100%",
  color: theme.palette.secondary.dark,
  height: "100%",
  padding: "5px",
}));
