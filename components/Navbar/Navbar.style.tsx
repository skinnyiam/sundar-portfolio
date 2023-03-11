import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
export const NavBarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "8px",
  borderWidth: "0.2px",
  borderColor: theme.palette.secondary.dark,
  height: "4rem",
  borderStyle: "solid",
  padding: "30px",
  position: "fixed",
  background: theme.palette.background.default,
  backdropFilter: "blur(10px)",
  zIndex: 1000,
  width: "49.5%",
  "@media (max-width: 900px)": {
    width: "100%",
    padding: "20px",
  },
}));

export const NavLinkRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 900px)": {
    width: "40rem",
  },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  paddingRight: "1.4rem",
  cursor: "pointer",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
  textDecoration: "none",
  transition: "color 0.13s ease-in-out",
  color: theme.palette.secondary.main,
  "@media (max-width: 900px)": {
    paddingRight: "1rem",
  },
  "&:hover": {
    color: theme.palette.secondary.dark,
  },
}));
export const NavLinkButton = styled(Typography)(({ theme }) => ({
  paddingRight: "1.4rem",
  cursor: "pointer",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const NavLinkWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
