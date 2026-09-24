import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {Box, Typography} from "@mui/material";
import SubServices from "@/components/subpages/subServices";
import NightlifeIcon from '@mui/icons-material/Nightlife';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HandshakeIcon from '@mui/icons-material/Handshake';

function OurConserts() {
    return (
        <>
            <Box
                id="media"
                sx={{ bgcolor: "#000", color: "white", minHeight: "100vh", py: { xs: 5, md: 8 }, px: 2, boxSizing: "border-box" }}
            >

            <Box sx={{ bgcolor: "#000", color: "white" }}>
                <Typography align="center" variant="h1" sx={{ mb: { xs: 4, md: 10 }, fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" } }} >
                    Our Concerts and Events Details
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3, width: "100%" }}>
                    <SubServices Icons={EmojiEventsIcon} services="Corporate Events & After Works"/>
                    <SubServices Icons={NightlifeIcon} services="Club Night & Theme Parties"/>
                    <SubServices Icons={CelebrationIcon} services="Private Parties & Birthdays"/>
                    <SubServices Icons={HandshakeIcon} services="Nostalgia Discos"/>
                </Box>
            </Box>
            </Box>

        </>
    );
}

export default OurConserts;