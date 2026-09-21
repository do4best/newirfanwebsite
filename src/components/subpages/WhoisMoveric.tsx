'use client'
import React from 'react';
import {poppins} from "@/app/fonts/manyFont";
import {Box, Typography} from "@mui/material";
import {motion} from "framer-motion";


export default function WhoisMaverick() {
    return (
        <Box
            id="about"
            sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh", py: 8 }}
        >
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                bgcolor: "primary",
                color: "text.primary",
                textAlign: "center",
                px: 3, // padding for smaller screens
            }}
        >
            <motion.div initial={{opacity:0,y:-50}}
                        animate={{opacity:3,y:0}}
                        transition={{duration:3,ease:"easeInOut"}}>
            <Typography className={poppins.className}
                variant="h2"
                sx={{
                    fontWeight: "700",
                    mb: 3,
                    color: "text.primary",
                }}
            >
                Who is DJ Maverick?
            </Typography>


            <Typography className={poppins.className}
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                    color: "grey.500",
                    fontWeight: "500",
                }}
            >
                DJ Maverick is a nostalgia-driven party DJ specialized in 80s, 90s and
                timeless dance classics. Known for high-energy sets, retro vibes and
                unforgettable dancefloor moments at corporate events, clubs and private
                parties.
            </Typography>
            </motion.div>
        </Box>
        </Box>
    );
}


