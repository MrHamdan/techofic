import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {  Typography } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function AppDevelopment() {
 

  // console.log(watch("example"));
  // console.log(watch("example"));
  return (
    <Grid item xs={12} md={6} xl={6}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "30px",
                      color: "#FEBC14",
                      marginBottom: "10px",
                    }}
                  >
                    Registrations closed!!
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: { xs: "30px", md: "48px", xl: "48px" },
                      lineHeight: "58px",
                      color: "#F4F4F4",
                      marginBottom: "40px",
                    }}
                  >
                    Free Bootcamp 2022 <br /> Flutter App Development
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Are you interested in Flutter app development but are stuck in the loophole of tutorials and courses?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Join TECHOFIC’s free bootcamp to get started with building apps like a pro in Flutter. In this bootcamp, our instructors will spend 3 classes(a total of about 6 hours) discussing the fundamentals of Flutter, best practices in app development, and in-demand real-world development skills that will put you ahead of the rest in the Flutter app developer job market.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    What will you get after the Bootcamp?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Participants will have a short assessment after the Bootcamp.
The selected candidates will be interviewed based on the assessment. Candidates will be ranked by assessment and interview scores. Top five candidates will receive a crest and certificates, and the top candidate will get a TECHOFIC internship contract offer.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Who can join our Bootcamp?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Anyone from Bangladesh
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    What you will learn?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    What is Flutter? <br />
                    Basics of the Dart programming language  <br />
                    Flutter starter project exploration <br />
                    UI cloning <br />
                    Design patterns - MVC, MVVM…  <br />
                    Flutter projects file folder structuring - Feature-first, layer-first… <br />
                    Networking and JSON parsing <br />
                    Foundations of state management <br />
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    What are the requirements?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Basic idea of mobile app development <br />
                    Basics of OOP with any programming language <br />
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Who are the instructors?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Momshad Dinury <br />
                    Software Engineer, BrainStation23
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Amani Saaduddin <br />
                    Software Engineer, Appifylab
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    When will our Bootcamp start?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                    }}
                  >
                   We will start the bootcamp from 27th August 2022.
                  </Typography>
                </Item>
              </Grid>
  );
}
