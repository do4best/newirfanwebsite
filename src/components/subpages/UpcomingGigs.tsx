import { Box, Container, Typography } from "@mui/material";

const gigsData = [
    {
        text: `Grand Nostalgia Disco is DJ Maverick's own event concept, where the biggest hits of the 80s and 90s,
    visual retro aesthetics and a communal party vibe come together.`,
    },
    {
        text: `Your Own or Your Company's Event?
    No Problem!
    Call Us Today!
    1-800-DJ-MAVERICK`,
    },
];

export default function UpcomingGigs() {
    return (
        <Box
            id="upcoming-gigs"
            sx={{ bgcolor: "#000", color: "white", minHeight: "100vh", py: 8 }}
        >
        <Box
            sx={{
                py: 10,
                textAlign: "center",
                backgroundImage: "url('/disco.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                    Upcoming Gigs
                </Typography>

                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        flexWrap: "wrap",
                    }}
                >
                    {gigsData.map((gig, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: "1px solid white",
                                p: 5,
                                maxWidth: 400,
                                bgcolor: "rgba(0,0,0,0.6)",
                                borderRadius: 2,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                                },
                            }}
                        >
                            <Typography variant="h6" color="grey.300" gutterBottom>
                                {gig.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
        </Box>
    );
}
