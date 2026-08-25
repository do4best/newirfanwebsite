'use client';
import React from 'react';
import { PaletteMode, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useContext } from "react";

type ThemeToggleContextType = {
    mode: PaletteMode;
    toggleTheme: () => void;
};

const ThemeToggleContext = createContext<ThemeToggleContextType>({
    mode: 'light',
    toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function Themes({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    const theme = React.useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode]);

    const toggleTheme = React.useCallback(() => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeToggleContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
}