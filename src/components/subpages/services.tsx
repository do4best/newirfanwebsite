import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SubServices from "./subServices";

const servicesData = [
    { icon: EmojiEventsIcon, label: "Corporate Events & After Works" },
    { icon: NightlifeIcon, label: "Club Night & Theme Parties" },
    { icon: CelebrationIcon, label: "Private Parties & Birthdays" },
    { icon: HandshakeIcon, label: "Nostalgia Discos" },
];

export default function Services() {
    return (

        <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh", width: "100%", py: { xs: 5, md: 8 }, px: 2, boxSizing: "border-box" }}>
            <Typography align="center" variant="h2" sx={{ mb: { xs: 4, md: 6 }, fontWeight: "bold", fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" } }}>
                Services
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap", width: "100%" }}>
                {servicesData.map((service, index) => (
                    <SubServices key={index} Icons={service.icon} services={service.label} />
                ))}
            </Box>
        </Box>

    );
}
