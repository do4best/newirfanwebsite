'use client'
import localFont from "next/font/local";
import { Box,  Container, Typography } from "@mui/material";
import { motion,AnimatePresence } from "framer-motion";
import { poppins } from "@/app/fonts/manyFont";
import InstagramIcon from '@mui/icons-material/Instagram';
import { FacebookRounded} from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import {useEffect,useState} from "react";

const MotionBox = motion(Box);
export default function Hero() {
    const backgrounds: string[] = [
        "url('/disco.jpg')",
        "url('/disco1.jpg')",
        "url('/disco2.jpg')",
    ];

        const [index, setIndex] = useState(0);

        // Change background every 2 seconds
        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % backgrounds.length);
            }, 10000);
            return () => clearInterval(interval);
        }, []);
    return (
        <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
                <MotionBox
                    key={index}
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: backgrounds[index],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
            {/* Gradient overlay for better text contrast */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(background.default, text.primary, primary.main)",
                }}
            />

            <Container
                sx={{
                    position: "relative",
                    zIndex: 2,
                    color: "text.primary",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        gap: { xs: 5, md: 8 },
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        {/* Animated headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Typography className={poppins.className}
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    textShadow: "2px 2px 10px rgba(0,0,0,0.6)",

                                }}
                                gutterBottom
                            >
                               Welcome to Dejavu
                            </Typography>
                        </motion.div>

                        {/* Subheading with fade-in delay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Typography className={poppins.className}
                                variant="h6"
                                sx={{ color: "text.secondary", mb: 4 }}
                            >
                                Your Ultimate Choice for 80s & 90s Music.
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 2, flexWrap: "wrap",marginLeft:15 }}>
                                <a href="https://www.instagram.com/maverick.dj" target="_blank"><InstagramIcon sx={{ fontSize: 30 }} /></a>
                            <FacebookRounded sx={{fontSize:30}}/>
                                <YouTubeIcon sx={{fontSize:30}}/>
                                <XIcon sx={{fontSize:30}}/>
                            </Box>
                        </motion.div>

                        {/* Buttons with hover + motion */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            {/*<Box*/}
                            {/*    sx={{*/}
                            {/*        display: "flex",*/}
                            {/*        justifyContent: { xs: "center", md: "flex-start" },*/}
                            {/*        gap: 2,*/}
                            {/*        flexWrap: "wrap",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Button*/}
                            {/*        variant="contained"*/}
                            {/*        sx={{*/}
                            {/*            bgcolor: "#000",*/}
                            {/*            color: "white",*/}
                            {/*            px: 3,*/}
                            {/*            py: 1.5,*/}
                            {/*            "&:hover": { bgcolor: "#222", transform: "scale(1.05)" },*/}
                            {/*            transition: "all 0.3s ease",*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        Get Started*/}
                            {/*    </Button>*/}
                            {/*    <Button*/}
                            {/*        variant="outlined"*/}
                            {/*        sx={{*/}
                            {/*            borderColor: "white",*/}
                            {/*            color: "white",*/}
                            {/*            px: 3,*/}
                            {/*            py: 1.5,*/}
                            {/*            "&:hover": {*/}
                            {/*                bgcolor: "rgba(255,255,255,0.1)",*/}
                            {/*                transform: "scale(1.05)",*/}
                            {/*            },*/}
                            {/*            transition: "all 0.3s ease",*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        Our Services*/}
                            {/*    </Button>*/}
                            {/*</Box>*/}
                        </motion.div>
                    </Box>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    >
                        <Box
                            sx={{
                                minHeight: { xs: 320, md: 480 },
                                borderRadius: 4,
                                backgroundImage: "url('/irfan1.jpeg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
                                border: "1px solid rgba(255,255,255,0.18)",
                            }}
                        />
                    </motion.div>
                </Box>
            </Container>
                </MotionBox>
            </AnimatePresence>
        </Box>
    );
}