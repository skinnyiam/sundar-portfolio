import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
export const ResumeWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
export const ResumeImg = styled("img")(({ theme }) => ({
  borderWidth: "1.5px",
  borderColor: theme.palette.secondary.dark,
  borderStyle: "solid",
  marginTop: "1rem",
  marginBottom: "1rem",
  "@media (max-width: 900px)": {
    // display: "none",
    width: "100%",
    padding: "1rem",
    borderWidth: "0px",
  },
}));

export const ViewButton = styled("a")(({ theme }) => ({
  borderRadius: "10px",
  borderWidth: "1.5px",
  borderColor: theme.palette.secondary.dark,
  borderStyle: "solid",
  fontSize: "1rem",
  fontFamily: "Montserrat",
  textDecoration: "none",
  padding: "8px",
  marginTop: "1rem",
  cursor: "Pointer",
  color: theme.palette.secondary.main,
}));
