import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function OurTrainers() {
  return (
    <Box sx={{ backgroundColor: "#1d1d1d" }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, padding: "84px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} xl={12}>
              <Item>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: "35px", md: "30px", xl: "48px" },
                    lineHeight: "72px",
                    color: "#F4F4F4",
                  }}
                >
                  Our Trainers
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item>
                <Box sx={{ marginBottom: "40px" }}>
                  <Image
                    src="/assets/images/trainerone.svg"
                    alt="trainerone picture"
                    width={397}
                    height={422}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "25px",
                    lineHeight: "38px",
                    color: "#F4F4F4",
                    marginBottom: "4px",
                  }}
                >
                  Harry Olson
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "35px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                    marginBottom: "8px",
                  }}
                >
                  Instructor
                </Typography>
                <InstagramIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <FacebookIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <TwitterIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <LinkedInIcon
                  sx={{ color: "#FEBC14", opacity: "0.6", cursor: "pointer" }}
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item>
                <Box sx={{ marginBottom: "40px" }}>
                  <Image
                    src="/assets/images/trainertwo.svg"
                    alt="trainertwo picture"
                    width={397}
                    height={422}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "25px",
                    lineHeight: "38px",
                    color: "#F4F4F4",
                    marginBottom: "4px",
                  }}
                >
                  David Parker
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "35px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                    marginBottom: "8px",
                  }}
                >
                  UI/UX Design Instructor
                </Typography>
                <InstagramIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <FacebookIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <TwitterIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <LinkedInIcon
                  sx={{ color: "#FEBC14", opacity: "0.6", cursor: "pointer" }}
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item>
                <Box sx={{ marginBottom: "40px" }}>
                  <Image
                    src="/assets/images/trainerthree.svg"
                    alt="trainerthree picture"
                    width={397}
                    height={422}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "25px",
                    lineHeight: "38px",
                    color: "#F4F4F4",
                    marginBottom: "4px",
                  }}
                >
                  Johanna Petricu
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "35px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                    marginBottom: "8px",
                  }}
                >
                  Web/App Developer
                </Typography>
                <InstagramIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <FacebookIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <TwitterIcon
                  sx={{
                    color: "#FEBC14",
                    marginRight: "16px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                />{" "}
                <LinkedInIcon
                  sx={{ color: "#FEBC14", opacity: "0.6", cursor: "pointer" }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
