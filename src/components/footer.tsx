'use client'
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Footer() {
    const sections = [
        {
            title: "About Us",
            links: [
                { label: "Our Team", href: "/team" },
                { label: "Careers", href: "/careers" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "Social Media Management", href: "/#services" },
                { label: "Influencer Marketing", href: "/#services" },
                { label: "Paid Advertising", href: "/#services" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", href: "/blog" },
                { label: "Case Studies", href: "/case-studies" },
            ],
        },
        {
            title: "Follow Us",
            links: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "YouTube", href: "https://youtube.com" },
            ],
        },
    ];

    return (
        <Box sx={{ bgcolor: "#000", color: "#fff", py: { xs: 4, md: 6 }, mt: { xs: 4, md: 8 } }}>
            <Container>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {sections.map((section) => (
                        <Grid size={{ xs: 6, md: 3 }} key={section.title}>
                            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                                {section.title}
                            </Typography>
                            {section.links.map((link) => {
                                const isExternal = link.href.startsWith("http");
                                return (
                                    <Link
                                        key={link.label}
                                        component={NextLink}
                                        href={link.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        variant="body2"
                                        underline="hover"
                                        sx={{
                                            display: "block",
                                            color: "gray",
                                            py: 0.5,
                                            wordBreak: "break-word",
                                            "&:hover": { color: "#fff" },
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" color="gray" sx={{ mt: 4, textAlign: { xs: "center", md: "left" } }}>
                    © 2026 Maverick Social. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
