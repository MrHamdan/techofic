import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Navbar from "../../components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const AcademyGetRegistered = styled(Button)({
  width: "214px",
  height: "54px",
  backgroundColor: "#FEBC14",
  borderRadius: "10px",
  fontFamily: "Lato",
  fontSize: "16px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "35px",
  color: "#323232",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FEBC14",
  },
  marginBottom: "135px",
});

export default function AcademyBanner() {
  return (
    <Box>
      <Navbar color="#343434" />
      <Box
        sx={{
          background: 'url("/assets/images/academybackground.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#727272",
          backgroundRepeat: "no-repeat",
          paddingTop: "185px",
        }}
      >
        <Container maxWidth="xxl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2} xl={2}>
                <Item>
                  <Image
                    src="/assets/images/academybannerpersonone.svg"
                    alt="Landscape picture"
                    width={203}
                    height={500}
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={12} xl={8}>
                <Item>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: { xs: "30px", md: "30px", xl: "61px" },
                      lineHeight: "92px",
                      color: "#F4F4F4",
                      marginBottom: "8px",
                    }}
                  >
                    TECHOFIC BOOTCAMP 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      lineHeight: "35px",
                      color: "#FEBC14",
                      marginBottom: "16px",
                    }}
                  >
                    Online
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.8",
                      marginBottom: "48px",
                    }}
                  >
                    24 August - 10:00am- 11:00am
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "214px",
                        height: "54px",
                        border: "2px solid #8752A1",
                        position: "absolute",
                        borderRadius: "10px",
                        marginLeft: "-8px",
                        marginTop: "-6px",
                      }}
                    ></Box>
                    <Link href='/bootcamp'>
                      <AcademyGetRegistered>
                        Get Registered
                      </AcademyGetRegistered>
                    </Link>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      lineHeight: "35px",
                      color: "#FEBC14",
                    }}
                  >
                    Hosted by Techofic
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    *SUCCESS GURANTEED
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2}>
                <Item>
                  <Image
                    src="/assets/images/academybannerpersontwo.svg"
                    alt="Landscape picture"
                    width={303}
                    height={534}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
