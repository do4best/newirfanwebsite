import React from 'react';
import { Box, Button, Container, Grid, Typography, AppBar, Toolbar, Card, CardContent } from "@mui/material";
function Header() {
    return (
  <>
      <AppBar position="static" sx={{ bgcolor: "#0a0f2c" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Maverick Social</Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                  {["Home", "Services", "Cases", "Blog", "Contact"].map((item) => (
                      <Button key={item} color="inherit">{item}</Button>
                  ))}
                  <Button variant="outlined" color="inherit">Sign In</Button>
                  <Button variant="contained" sx={{ bgcolor: "#1976d2" }}>Get Started</Button>
              </Box>
          </Toolbar>
      </AppBar>
            </>
    );
}

export default Header;