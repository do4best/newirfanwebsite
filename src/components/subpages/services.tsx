import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {Box} from "@mui/material";
import SubServices from "@/components/subpages/subServices";
import NightlifeIcon from '@mui/icons-material/Nightlife';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HandshakeIcon from '@mui/icons-material/Handshake';

function Services() {
    return (
        <>
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",bgcolor:"#0a0f2c",color:"white",gap:3}}>
                <SubServices Icons={EmojiEventsIcon} services="Carpotrate Events & After Works"/>
                <SubServices Icons={NightlifeIcon} services="Club Night & Theme Parties"/>
                <SubServices Icons={CelebrationIcon} services="Private Parties & Birthdays"/>
                <SubServices Icons={HandshakeIcon} services="Nostaligia Discos"/>
            </Box>

        </>
    );
}

export default Services;