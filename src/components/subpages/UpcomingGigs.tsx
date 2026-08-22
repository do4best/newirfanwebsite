import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function UpcomingGigs() {
    return (
        <>
            <Box sx={{ py: 10, textAlign: "center",backgroundImage:"url('/disco.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"100vh" }}>
                <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <Typography variant="h3" sx={{fontWeight:"700"}} gutterBottom>
                       Upcoming Gigs
                    </Typography>

                    <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                        <Typography sx={{border:"solid 1px white",p:10}}  variant="h6" color="gray" gutterBottom>
                            Grand Nostalgia Disco is DJ Maverick&#39;s own event concept, where the biggest hits of the 80s and 90s,
                            visual retro aesthetics and a communal party vibe come together.
                        </Typography>
                        <Typography sx={{border:"solid 1px white", p:10}}  variant="h6" color="gray" gutterBottom>
                            Your Own or Your Company&#39;s Event?
                            No Problem!
                            Call Us Today!
                            1-800-DJ-MAVERICK
                        </Typography>
                    </Box>
                </Container>
            </Box>

        </>
    );
}

export default UpcomingGigs;