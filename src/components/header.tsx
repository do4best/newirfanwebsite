'use client';
import { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TranslateIcon from '@mui/icons-material/Translate';
import {
    Box,
    Button,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    useTheme,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Divider
} from "@mui/material";

import { useThemeToggle } from "@/app/theme";
import TranslationThing from "@/app/translationThing";

const navItems = ["Information", "Services", "Upcoming Gigs", "Media", "Reservation"];

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const { toggleTheme } = useThemeToggle();

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: theme.palette.mode === 'dark' ? "background.paper" : "#0a0f2c" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Maverick Social
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
                        {navItems.map((item) => (
                            <Button key={item} color="inherit">{item}</Button>
                        ))}
                        <Button variant="outlined" color="inherit">Sign In</Button>
                    </Box>

                    {/* Actions: Theme Toggle & Mobile Menu */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                px: 1.5,
                                py: 0.6,
                                borderRadius: "20px",
                                border: "1px solid",
                                borderColor: theme.palette.mode === 'dark' ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.3)",
                                bgcolor: theme.palette.mode === 'dark' ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(6px)",
                                transition: "all 0.2s ease-in-out",
                                "&:hover": {
                                    bgcolor: theme.palette.mode === 'dark' ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.22)",
                                    borderColor: theme.palette.mode === 'dark' ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.5)",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                },
                            }}
                        >
                            <TranslateIcon sx={{ fontSize: 18, mr: 0.8, opacity: 0.85 }} />
                            <TranslationThing />
                        </Box>
                        <IconButton onClick={toggleTheme} color="inherit" aria-label="toggle dark mode">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>

                        {/* Mobile menu */}
                        <IconButton
                            color="inherit"
                            edge="end"
                            aria-label="open drawer"
                            sx={{ display: { xs: "inline-flex", md: "none" } }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 280, p: 2, display: "flex", flexDirection: "column", height: "100%" }}
                    role="presentation"
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Maverick Social
                        </Typography>
                        <IconButton onClick={toggleDrawer(false)} aria-label="close drawer">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <List sx={{ flexGrow: 1 }}>
                        {navItems.map((item) => (
                            <ListItemButton key={item} onClick={toggleDrawer(false)}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Button variant="outlined" color="primary" fullWidth onClick={toggleDrawer(false)}>
                        Sign In
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}

export default Header;