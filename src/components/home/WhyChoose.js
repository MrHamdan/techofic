import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Styles from "../../styles/WhyChoose.module.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));


const SolutionsButton = styled(Button) ({
  fontFamily:'Lato',
  fontStyle:'normal',
  fontWeight:'700',
  fontSize:'16px',
  lineHeight:'35px',
  textAlign: 'center',
  color:'#F4F4F4',
  width:'253px',
  height:'54px',
  border:'1px solid #FEBC14',
  borderRadius: '10px',
  textTransform:'none',
  marginTop:'64px',
})


export default function WhyChoose() {
  return (
    <Box
      sx={{
        backgroundColor: "#323232",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{
              padding: "74px 0px",
            }}
          >
            <Grid item xs={12} md={12} xl={12}>
              <Item>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "48px",
                    lineHeight: "72px",
                    color: "#F4F4F4",
                    marginBottom: "48px",
                  }}
                >
                  Why Choose Us?
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item
                sx={{
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  border: "2px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  zIndex: 1,
                  padding: "24px",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #febc14",
                    width: "121px",
                    position: "absolute",
                    right: 0,
                    bottom: 20,
                    opacity: 0.5,
                    zIndex: -1,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#F4F4F4",
                  }}
                >
                  4+ years of experience:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  Our Senior Engineers have the expertise your projects need.
                  Our 100% bilingual talented professionals have the practical
                  experience to face every challenge and are certified in every
                  technology and methodology.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item
                sx={{
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  border: "2px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  zIndex: 1,
                  padding: "24px",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #febc14",
                    width: "121px",
                    position: "absolute",
                    left: 0,
                    bottom: 20,
                    opacity: 0.5,
                    zIndex: -1,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#F4F4F4",
                  }}
                >
                  Time Zone aligned:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  Living and working in the same time zone removes friction and
                  allows for seamless integration. This makes everyday work,
                  meetings, and collaboration easier.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item
                sx={{
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  border: "2px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  zIndex: 1,
                  padding: "24px",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #febc14",
                    width: "121px",
                    position: "absolute",
                    left: 0,
                    bottom: 20,
                    opacity: 0.5,
                    zIndex: -1,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#F4F4F4",
                  }}
                >
                  We hire only the Top 1% of IT Talent:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  We thrive in finding the Top 1% IT Talent to fulfill every
                  projects needs. Our team evaluates over 400 applicants every
                  year to find the most talented Software Engineers and we
                  provide them continuous and extensive training.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item
                sx={{
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  border: "2px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  zIndex: 1,
                  padding: "24px",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #febc14",
                    width: "121px",
                    position: "absolute",
                    right: 0,
                    bottom: 20,
                    opacity: 0.5,
                    zIndex: -1,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#F4F4F4",
                  }}
                >
                  Our Unique Approach & Process:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  We start with a deep analysis and go forward understanding
                  your needs, Then we divide our work into different parts and
                  approach them to different people in ouu team.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Item
                sx={{ textAlign: { xs: "center", md: "center", xl: "center" } }}
              >
                <SolutionsButton>Start a Business With Us</SolutionsButton>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
