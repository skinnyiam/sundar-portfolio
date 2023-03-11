import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
export const HomePageWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  width: "100%",
  height: "",
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.secondary.dark,
  display: "flex",
  "@media (max-width: 900px)": {
    flexDirection: "column-reverse",
    paddingTop: "2rem",
  },
}));

export const HomeHeroSection = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginLeft: "10px",
  "@media (max-width: 900px)": {
    marginLeft: "0px",
    paddingTop: "2rem",
    width: "100%",
  },
}));
export const HomeImg = styled("img")(({ theme }) => ({
  width: "50%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));

export const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: "3.3rem",
  fontWeight: "580",
  color: theme.palette.secondary.main,
  "@media (max-width: 900px)": {
    fontSize: "2.8rem",
    padding: "8px",
  },
}));
export const HeroDetails = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "550",
  color: theme.palette.secondary.main,
  "@media (max-width: 900px)": {
    // fontSize: "2.8rem",
    padding: "10px",
  },
}));
export const HeroLinks = styled(Typography)(({ theme }) => ({
  display: "flex",
  //   flexDirection: "column",
  gap: "1rem",
  paddingTop: "1rem",
  "@media (max-width: 900px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const HeroLink = styled("a")(({ theme }) => ({
  fontSize: "2rem",
  curso: "pointer",
  color: theme.palette.secondary.main,
}));
export const BorderWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "7rem",
  backgroundColor: theme.palette.background.default,
  "@media (max-width: 900px)": {
    padding: "1rem",
    paddingTop: "5rem",
  },
}));
