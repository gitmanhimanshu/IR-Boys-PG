import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KingBedIcon from "@mui/icons-material/KingBed";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

const rooms = [
  {
    title: "Luxury Single Suite",
    description: "Premium single occupancy room with modern amenities and elegant design",
    price: "₹5,500/month",
    features: [
      "Premium Single Bed",
      "Modern Study Table",
      "Spacious Wardrobe",
      "High-Speed WiFi",
      "24/7 Hot Water",
      "Daily Housekeeping",
    ],
    image: "data:image/jpeg;base64,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",
    icon: <KingBedIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Executive Double Room",
    description: "Spacious double occupancy room with premium amenities and modern decor",
    price: "₹7,500/month",
    features: [
      "Queen Size Bed",
      "Ergonomic Study Table",
      "Walk-in Wardrobe",
      "High-Speed WiFi",
      "Attached Bathroom",
      "Air Conditioning",
      "Laundry Service",
    ],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: <AcUnitIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Deluxe Triple Suite",
    description: "Luxurious triple occupancy suite with premium amenities and spacious layout",
    price: "₹9,500/month",
    features: [
      "Three Premium Beds",
      "Individual Study Tables",
      "Large Wardrobes",
      "High-Speed WiFi",
      "Attached Bathroom",
      "Air Conditioning",
      "Laundry Service",
      "Room Service",
    ],
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: <BathtubIcon sx={{ fontSize: 40 }} />,
  },
];

const Rooms = () => {
  return (
    <Box sx={{ 
      py: 8, 
      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
      minHeight: "100vh"
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 900,
              background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              mb: 2
            }}
          >
            Premium Accommodations
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 8, fontStyle: "italic" }}
          >
            Experience luxury living with our state-of-the-art facilities
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {rooms.map((room, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    borderRadius: 4,
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={room.image}
                      alt={room.title}
                      sx={{
                        filter: "brightness(0.9)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          filter: "brightness(1)",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "rgba(255,255,255,0.9)",
                        borderRadius: 2,
                        p: 1,
                      }}
                    >
                      {room.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      sx={{ 
                        fontWeight: "bold",
                        color: "primary.main",
                        mb: 1
                      }}
                    >
                      {room.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{ 
                        mb: 2, 
                        fontWeight: "bold",
                        background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      {room.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 3, fontStyle: "italic" }}
                    >
                      {room.description}
                    </Typography>
                    <List>
                      {room.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon sx={{ color: "primary.main" }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature}
                            primaryTypographyProps={{
                              sx: { fontWeight: 500 }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={8}
          sx={{
            mt: 8,
            p: 6,
            background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
            color: "white",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Ready to Experience Premium Living?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Book your stay now and enjoy our world-class amenities and services
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "grey.100",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            Book Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Rooms; 