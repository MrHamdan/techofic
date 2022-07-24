import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "../../styles/Banner.module.css";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));


const BannerButton = styled(Button) ({
  width:'159px',
  height:'54px',
  backgroundColor:'#FEBC14',
  borderRadius:'10px',
  fontFamily:'Lato',
  fontSize:'16px',
  fontWeight:'700',
  fontStyle:'normal',
  lineHeight:'35px',
  color:'#323232',
  textTransform:'none',
  '&:hover': {
    backgroundColor:'#FEBC14',
  }
})

export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#1d1d1d" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{display:'flex', alignItems: 'center', padding:'95px 0px'}}>
          <Grid item xs={12} md={6} xl={6}>
            <Item>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "61px",
                  lineHeight: "71px",
                  textTransform: "capitalize",
                  color: "#F4F4F4",
                  textAlign: "left",
                  marginBottom:'24px',
                }}
              >
                We Execute{" "}
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "61px",
                    lineHeight: "71px",
                    textTransform: "capitalize",
                    color: "#FEBC14",
                    textAlign: "left",
                  }}
                >
                  Dreams
                </Typography>{" "}
                Into{" "}
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "61px",
                    lineHeight: "71px",
                    textTransform: "capitalize",
                    color: "#FEBC14",
                    textAlign: "left",
                  }}
                >
                  Softwares
                </Typography>
              </Typography>
              <Typography sx={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "35px",
                color:"#F4F4F4",
                opacity:"0.6",
                textAlign:'left',
                marginBottom:'48px',
              }}>
                Techofic is one of the leading software development companies,
                helping clients transform their existing businesses in light of
                the swiftly evolving nature of digital innovation.
              </Typography>
              <Box sx={{textAlign:'left'}}>
                <BannerButton>
                  Lets Talk
                </BannerButton>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item>
              <Image
                src="/assets/images/bannerimage.svg"
                alt="Banner picture"
                width={557}
                height={557}
              />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
