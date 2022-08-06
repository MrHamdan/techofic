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
                    Registrations Will Be Open Soon
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
                    Free Bootcamp 2022 <br /> App Development (Flutter)
                  </Typography>
                
                </Item>
              </Grid>
  );
}
