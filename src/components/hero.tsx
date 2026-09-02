'use client'
import { Box, Button, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function Hero() {

    return (
        <Box sx={{ py: 10, textAlign: "center",backgroundImage:"url('/disco.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"100vh" }}>
            <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <motion.span initial={{
                    opacity: 0,
                    filter: "blur(5px)",
                }}
                             animate={{
                                 opacity: 1,
                                 filter: " blur(0px)",
                                 transition: { duration: 0.5 },
                             }}>       <Typography variant="h3" sx={{fontWeight:"700"}} gutterBottom>
                    Elevate Your Brand on Social Media
                </Typography>
                </motion.span>
                <Typography  variant="h6" color="gray" gutterBottom>
                    Social Media Marketing & Influencer Collaboration
                </Typography>
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button variant="contained" sx={{ bgcolor: "#fff" }}>Get Started</Button>
                    <Button variant="outlined" color="inherit">Our Services</Button>
                </Box>
            </Container>
        </Box>
    );
}
