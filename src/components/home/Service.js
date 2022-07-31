import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "../../styles/Service.module.css";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
    boxShadow: theme.shadows[0],
}));

export default function Service() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#222222" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ padding: "80px 0px" }}>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/discovery.svg"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "35px",
                  color: "#F4F4F4",
                  marginTop: "24px",
                }}
              >
                Discovery
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#F4F4F4",
                  opacity: "0.6",
                  marginTop: "16px",
                }}
              >
                Rich individuality from the line on paper to final production,
                from first concepts to the endmost.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/design.svg"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "35px",
                  color: "#F4F4F4",
                  marginTop: "24px",
                }}
              >
                Design
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#F4F4F4",
                  opacity: "0.6",
                  marginTop: "16px",
                }}
              >
                Give our customers a better, more user-friendly experience to
                make digital products work better.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/development.svg"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "35px",
                  color: "#F4F4F4",
                  marginTop: "24px",
                }}
              >
                Development
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#F4F4F4",
                  opacity: "0.6",
                  marginTop: "16px",
                }}
              >
                If you already have a design or
                concept in mind, we can assist you in making it a unique reality.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/deliver.svg"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "35px",
                  color: "#F4F4F4",
                  marginTop: "24px",
                }}
              >
                Delivery
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#F4F4F4",
                  opacity: "0.6",
                  marginTop: "16px",
                }}
              >
                We are the bridges between the brand and its customers since we
                have a deep understanding.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
