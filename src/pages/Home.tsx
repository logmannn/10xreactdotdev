import { Box, Typography, Container, Grid, Button } from "@mui/material";

export function Home() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12, lg: 16 },
          textAlign: "center",
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "grey.900",
            mb: 3,
          }}
        >
          I build React/MUI UI <br />
          10× faster.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
            fontWeight: 400,
            color: "grey.700",
            lineHeight: 1.6,
            maxWidth: "700px",
            mx: "auto",
            mb: 8,
          }}
        >
          Fractional front-end engineer available ~10 hrs/week for startups &
          agencies.
        </Typography>

        {/* 7+ years React experience */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: 500,
            color: "grey.800",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          7+ years React experience
        </Typography>

        {/* Features / Value Proposition */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{
            mb: 8,
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          {/* Fast Delivery */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderRadius: 2,
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "grey.200",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "grey.400",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 700,
                  color: "grey.900",
                  mb: 1.5,
                }}
              >
                Fast Delivery
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "grey.700",
                  lineHeight: 1.6,
                }}
              >
                I build production-quality UI in hours, not days.
              </Typography>
            </Box>
          </Grid>

          {/* Senior-Level Components */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderRadius: 2,
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "grey.200",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "grey.400",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 700,
                  color: "grey.900",
                  mb: 1.5,
                }}
              >
                Senior-Level Components
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "grey.700",
                  lineHeight: 1.6,
                }}
              >
                MUI, responsive design, accessibility, reusable patterns.
              </Typography>
            </Box>
          </Grid>

          {/* Fractional Flexibility */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderRadius: 2,
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "grey.200",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "grey.400",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 700,
                  color: "grey.900",
                  mb: 1.5,
                }}
              >
                Fractional Flexibility
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "grey.700",
                  lineHeight: 1.6,
                }}
              >
                Perfect for teams that need 5–15 hrs/week.
              </Typography>
            </Box>
          </Grid>

          {/* Modern AI Workflow */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderRadius: 2,
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "grey.200",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "grey.400",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 700,
                  color: "grey.900",
                  mb: 1.5,
                }}
              >
                Modern AI Workflow
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "grey.700",
                  lineHeight: 1.6,
                }}
              >
                I use AI tools to accelerate build speed — without sacrificing
                quality.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* first video in a series on building a ui with mui */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: 500,
            color: "grey.800",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Fast UI with React + MUI
          <br />
          (Full hero section in less than 10 minutes)
        </Typography>

        {/* Demo Video */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            mx: "auto",
            paddingTop: "56.25%", // 16:9 aspect ratio
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
          }}
        >
          <iframe
            src="https://drive.google.com/file/d/1VRUkzkOI68z9dZ2O90KHJsHWpGlXXARj/preview"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="autoplay"
            title="Demo Video"
          />
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 12,
            py: 8,
            px: 4,
            textAlign: "center",
            borderRadius: 3,
            bgcolor: "grey.900",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Need UI work done fast?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.35rem" },
              fontWeight: 400,
              color: "grey.300",
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            I take on 1–2 part-time clients at 8–12 hrs/week total.
          </Typography>
          <Button
            variant="contained"
            size="large"
            // add email to the button
            href="mailto:logantanous@gmail.com"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: 600,
              py: { xs: 1.5, md: 2 },
              px: { xs: 4, md: 5 },
              bgcolor: "white",
              color: "grey.900",
              borderRadius: 2,
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
              "&:hover": {
                bgcolor: "grey.100",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Work With Me
          </Button>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 12,
            pt: 6,
            pb: 4,
            borderTop: "1px solid",
            borderColor: "grey.200",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 3, sm: 4 },
              mb: 3,
              flexWrap: "wrap",
            }}
          >
            <Typography
              component="a"
              href="https://www.linkedin.com/in/logantanous/"
              sx={{
                fontSize: "1rem",
                color: "grey.700",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  color: "grey.900",
                  textDecoration: "underline",
                },
              }}
            >
              LinkedIn
            </Typography>
            <Typography
              component="a"
              href="mailto:logantanous@gmail.com"
              sx={{
                fontSize: "1rem",
                color: "grey.700",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  color: "grey.900",
                  textDecoration: "underline",
                },
              }}
            >
              Email
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "grey.500",
            }}
          >
            © {new Date().getFullYear()} Logan Tanous. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
