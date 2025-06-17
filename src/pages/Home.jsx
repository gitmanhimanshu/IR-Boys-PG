import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SecurityIcon from "@mui/icons-material/Security";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const features = [
  {
    title: "High-Speed WiFi",
    description: "Stay connected with our complimentary high-speed internet access throughout the premises.",
    icon: <WifiIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Nutritious Meals",
    description: "Enjoy delicious and hygienic meals prepared in our modern kitchen facility.",
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "24/7 Security",
    description: "Your safety is our priority with round-the-clock security and CCTV surveillance.",
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Laundry Service",
    description: "Professional laundry service available for all residents.",
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Housekeeping",
    description: "Regular cleaning and maintenance to ensure a comfortable living environment.",
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              Welcome to IR Boys PG
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                mb: 4,
                maxWidth: "800px",
              }}
            >
              Your home away from home. Experience comfort, community, and convenience
              in the heart of Jaipur.
            </Typography>
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              size="large"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
              }}
            >
              View Rooms
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                mb: 6,
              }}
            >
              Our Features
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
                      <Box
                        sx={{
                          color: "primary.main",
                          mb: 2,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Ready to Join Us?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
            >
              Book your stay now and experience the perfect blend of comfort and
              community.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;