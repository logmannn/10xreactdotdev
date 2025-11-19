import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function Navigation() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 1.5,
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Logo/Brand */}
        <Box
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "grey.900",
              letterSpacing: "-0.02em",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            10xReact.dev
          </Typography>
        </Box>

        {/* Right Side - Work With Me Button */}
        <Button
          component="a"
          href="mailto:logantanous@gmail.com"
          variant="contained"
          sx={{
            backgroundColor: "grey.900",
            color: "white",
            px: 3,
            py: 1,
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 2,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "grey.800",
              boxShadow: "none",
            },
          }}
        >
          Work With Me
        </Button>
      </Toolbar>
    </AppBar>
  );
}
