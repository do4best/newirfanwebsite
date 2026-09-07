import { Box, Typography } from "@mui/material";

interface SubServicesProps {
    Icons: React.ElementType;
    services: string;
    description?: string;
}

export default function SubServices({ Icons, services, description }: SubServicesProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
                p: 4,
                width: 250,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                },
            }}
        >
            <Icons sx={{ fontSize: 50, mb: 2, color: "primary.main" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {services}
            </Typography>
            {description && (
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {description}
                </Typography>
            )}
        </Box>
    );
}
