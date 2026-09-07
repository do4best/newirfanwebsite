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

        <Box sx={{ bgcolor: "#000", color: "white", minHeight: "100vh", py: 8 }}>
            <Typography align="center" variant="h2" sx={{ mb: 6, fontWeight: "bold" }}>
                Services
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                {servicesData.map((service, index) => (
                    <SubServices key={index} Icons={service.icon} services={service.label} />
                ))}
            </Box>
        </Box>

    );
}
