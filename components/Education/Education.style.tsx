import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
export const EducationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "40px",
  flexDirection: "column",
  gap: "1rem",
  "@media (max-width: 900px)": {
    padding: "15px",
  },
}));
export const EducationSection = styled(Box)(({ theme }) => ({
  padding: "10px",
}));
export const EducationYear = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "550",
  color: theme.palette.secondary.main,
}));
export const EducationField = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: "1rem",
}));
export const EducationInstitute = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
