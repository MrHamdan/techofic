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

export default function Uiux() {
 

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
                    Free Bootcamp 2022 <br /> UI/UX Design
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
                    Are you interested in UI/UX design but have no <br /> clue
                    where to start?
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
                    Join our free Bootcamp A Journey to Start As a Professional
                    UI/UX by Techofic. Becoming a good professional UI/UX is a
                    matter of time and experience. In this Bootcamp, our
                    Instructor will take 3 Classes (a total of 6 hours) to
                    discuss and explain the common concepts, and best practices
                    of UI/UX and introduce you to real-world projects. start?
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
                    After the Bootcamp will give a small assessment to the
                    viewers with a deadline. Based on the score of this
                    assessment will take a short interview of the selected
                    candidates. Both scores of the assessment and interview will
                    rank the candidates. The top 5 candidates will be awarded
                    certificates and crest. And the top candidate will be
                    offered a Techofic Internship contract.
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
                    What is (UI/UX)? <br /> The future of Ui/Ux Design <br />
                    Design Thinking <br /> Design Principals <br /> All about
                    Design Tools <br /> Good and Bad Ui Design <br /> UI
                    Designer’s Road Map <br /> Design Resources
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
                    Basic Idea of graphics design <br /> Basics of the design
                    tools.
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
                    Minhajul Abeeden <br /> UI/UX Designer, LEXIT
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
                    We will start our Bootcamp in the middle of August 2022
                    depending on your responses.
                  </Typography>
                </Item>
              </Grid>
  );
}
