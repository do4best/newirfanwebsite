'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                backgroundImage: "url('/disco.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                py: { xs: 8, md: 0 },
            }}
        >
            {/* Gradient overlay for better text contrast */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
                }}
            />

            <Container
                sx={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
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
                            <Typography
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
                            <Typography
                                variant="h6"
                                sx={{ color: "rgba(255,255,255,0.8)", mb: 4 }}
                            >
                                Your Ultimate Choice for 80s & 90s Music.
                            </Typography>
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
        </Box>
    );
}