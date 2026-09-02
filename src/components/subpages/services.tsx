import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {Box, Typography} from "@mui/material";
import SubServices from "@/components/subpages/subServices";
import NightlifeIcon from '@mui/icons-material/Nightlife';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HandshakeIcon from '@mui/icons-material/Handshake';

function Services() {
    return (
        <>


            <Box sx={{ bgcolor: "#000", color: "white", minHeight: "100vh" }}>
                <Typography align="center" variant="h1" sx={{ mb: 10 }}>
                    Services
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                    <SubServices Icons={EmojiEventsIcon} services="Corporate Events & After Works"/>
                    <SubServices Icons={NightlifeIcon} services="Club Night & Theme Parties"/>
                    <SubServices Icons={CelebrationIcon} services="Private Parties & Birthdays"/>
                    <SubServices Icons={HandshakeIcon} services="Nostalgia Discos"/>
                </Box>
            </Box>


        </>
    );
}

export default Services;