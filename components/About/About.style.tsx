import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const AboutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "30px",
}));

export const AboutMeText = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  padding: "10px",
  color: theme.palette.secondary.main,
}));
