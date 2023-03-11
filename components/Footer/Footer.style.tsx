import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FooterWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  flexDirection: "column",
  borderRadius: "8px",
  borderWidth: "1.5px",
  borderColor: theme.palette.secondary.dark,
  // height: "7rem",
  borderStyle: "solid",
  padding: "10px",
  marginTop: "2rem",
  // marginBottom: "1rem",
  // position: "fixed",
}));

export const FooterContributionText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "550",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.secondary.main,
}));

export const GithubLink = styled("a")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.secondary.main,
}));
