import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
    const sections = [
        { title: "About Us", links: ["Our Team", "Careers"] },
        { title: "Services", links: ["Social Media Management", "Influencer Marketing", "Paid Advertising"] },
        { title: "Resources", links: ["Blog", "Case Studies"] },
        { title: "Follow Us", links: ["Facebook", "Instagram", "LinkedIn", "YouTube"] },
    ];

    return (
        <Box sx={{ bgcolor: "#0a0f2c", py: 6, mt: 8 }}>
            <Container>
                <Grid container spacing={4}>
                    {sections.map((section) => (
                        <Grid size={{ xs: 12, md: 3 }} key={section.title}>
                            <Typography variant="h6" gutterBottom>{section.title}</Typography>
                            {section.links.map((link) => (
                                <Typography key={link} variant="body2" color="gray">{link}</Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" color="gray" sx={{ mt: 4 }}>
                    © 2024 Maverick Social. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
