// app/page.tsx
"use client";

import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

export default function ContactMe() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "black",
            }}
        >
            <Card
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    maxWidth: 900,
                    borderRadius: 3,
                    boxShadow: 6,
                    overflow: "hidden",
                    bgcolor: "rgba(20,20,40,0.9)",
                }}
            >
                {/* Left side: Video */}
                <CardMedia
                    component="video"
                    sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }}
                    src="/irfanvid1.mp4"   // served from public/ folder
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* Right side: Text */}
                <CardContent sx={{ p: 4,marginTop:12 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
                        Mr. Mevrick
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.300", mb: 3 }}>
                        DJ Mr.Mevrick knows how to move your mind, body and soul by delivering
                        tracks that stand out from the norm. As if this impressive succession
                        of high impact, floor-filling bombs wasn’t enough to sustain.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "purple",
                            "&:hover": { bgcolor: "darkviolet" },
                            fontWeight: "bold",
                        }}
                    >
                        CONTACT ME
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
