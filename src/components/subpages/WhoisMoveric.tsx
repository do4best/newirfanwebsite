import React from 'react';
import {Box, Typography} from "@mui/material";


export default function WhoisMaverick() {
    return (
        <Box
            id="about"
            sx={{ bgcolor: "#000", color: "white", minHeight: "100vh", py: 8 }}
        >
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                bgcolor: "#000",
                color: "white",
                textAlign: "center",
                px: 3, // padding for smaller screens
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "primary.main",
                }}
            >
                Who is DJ Maverick?
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                    color: "grey.300",
                }}
            >
                DJ Maverick is a nostalgia-driven party DJ specialized in 80s, 90s and
                timeless dance classics. Known for high-energy sets, retro vibes and
                unforgettable dancefloor moments at corporate events, clubs and private
                parties.
            </Typography>
        </Box>
        </Box>
    );
}


