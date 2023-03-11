import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [toggleDark, settoggleDark] = useState(false);

  const myTheme = createTheme({
    // Theme settings
    palette: {
      mode: toggleDark ? "dark" : "light",
      primary: {
        main: toggleDark ? "#020202" : "#d6cdcd",
      },
      secondary: {
        main: toggleDark ? "#000000" : "#ffffff",

        dark: toggleDark ? "#000000" : "#ffffff",
      },
      background: {
        default: toggleDark ? "#fff" : "#000000",
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={myTheme}>
      <Navbar toggleDark={toggleDark} settoggleDark={settoggleDark} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
