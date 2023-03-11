import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ExperienceWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "30px",
}));
export const CompanyName = styled(Typography)(({ theme }) => ({
  padding: "10px",
  fontSize: "2rem",
  fontWeight: "580",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  color: theme.palette.secondary.main,
  "@media (max-width: 900px)": {
    display: "flex",
    flexDirection: "column",
  },
}));

export const RoleDetails = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}));

export const WorkDone = styled(Box)(({ theme }) => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: theme.palette.secondary.main,
}));

export const Task = styled("li")(({ theme }) => ({
  fontSize: "1.3rem",
  fontFamily: "Montserrat",
  color: theme.palette.secondary.main,
}));
