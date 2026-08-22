import { Box, Button, Container } from "@mui/material";
import { Typography } from "@mui/material";
export default function Hero() {

    return (
        <Box sx={{ py: 10, textAlign: "center",backgroundImage:"url('/disco.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"100vh" }}>
            <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Typography variant="h3" sx={{fontWeight:"700"}} gutterBottom>
                    Elevate Your Brand on Social Media
                </Typography>
                <Typography  variant="h6" color="gray" gutterBottom>
                    Social Media Marketing & Influencer Collaboration
                </Typography>
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button variant="contained" sx={{ bgcolor: "#1976d2" }}>Get Started</Button>
                    <Button variant="outlined" color="inherit">Our Services</Button>
                </Box>
            </Container>
        </Box>
    );
}
