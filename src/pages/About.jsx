import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const facilities = [
  {
    title: "Spacious Rooms",
    description: "Comfortable and well-furnished rooms designed for a relaxing stay.",
    icon: <HistoryIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "24/7 Security",
    description: "Your safety is our top priority with round-the-clock surveillance.",
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Nutritious Meals",
    description: "Healthy and delicious food served fresh everyday.",
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "High-Speed Internet",
    description: "Seamless connectivity with our high-speed WiFi for all your needs.",
    icon: <WifiIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Laundry Service",
    description: "Convenient and professional laundry services available on-site.",
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Daily Housekeeping",
    description: "Regular cleaning and maintenance to ensure a pristine living space.",
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Air Conditioning",
    description: "All rooms are equipped with AC for your comfort during all seasons.",
    icon: <AcUnitIcon sx={{ fontSize: 40 }} />,
  },
];

const About = () => {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427fdce84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ zIndex: 2, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "3rem", md: "5rem" },
                textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              }}
            >
              About IR Boys PG
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Providing a comfortable and supportive environment for students and professionals in Jaipur.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Story Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <HistoryIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
                    <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
                      Our Story
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    IR Boys PG was established with a vision to provide comfortable and
                    affordable accommodation for students and working professionals. We
                    understand the importance of a supportive living environment and strive
                    to create a home away from home for our residents.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Over the years, we have grown to become one of the most trusted PG
                    accommodations in the area, known for our quality service and
                    commitment to resident satisfaction.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <EmojiEventsIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
                    <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    Our mission is to offer premium hostel facilities that foster personal growth and academic success.
                    We aim to create a vibrant community where residents feel supported, safe, and inspired.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    We are dedicated to maintaining the highest standards of cleanliness, security, and service,
                    ensuring that every resident enjoys a hassle-free and enriching living experience.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Facilities Section */}
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
              Our Facilities
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {facilities.map((facility, index) => (
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
                        boxShadow: "0 12px 20px rgba(0,0,0,0.2)",
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
                        {facility.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {facility.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {facility.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Community Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GroupsIcon sx={{ fontSize: 60, mb: 3 }} />
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Join Our Thriving Community
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Become a part of a supportive and friendly community where you can connect,
              learn, and grow. We organize regular events and activities to foster a sense of belonging.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
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
              Connect With Us
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About;