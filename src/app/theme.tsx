"use client";

import React, { createContext, useContext, useState,useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";

type ThemeToggleContextType = {
    mode: PaletteMode;
    toggleTheme: () => void;
};

const ThemeToggleContext = createContext<ThemeToggleContextType>({
    mode: "light",
    toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function Themes({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<PaletteMode>("light");

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };
    // useEffect(() => {
    //     document.documentElement.classList.toggle("dark", mode === "dark");
    // }, [mode]);


    return (
        <ThemeToggleContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
}
