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

export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Styles.banner_bg}>
      <Container maxWidth="xl">
        <Grid container spacing={2} className={Styles.banner_grid}>
          <Grid item xs={12} md={6} xl={6}>
            <Item>
              <Typography className={Styles.banner_heading_style}>
                We Execute{" "}
                <Typography
                  component="span"
                  className={Styles.banner_heading_style_colored}
                >
                  Dreams
                </Typography>{" "}
                Into{" "}
                <Typography
                  component="span"
                  className={Styles.banner_heading_style_colored}
                >
                  Softwares
                </Typography>
              </Typography>
              <Typography className={Styles.banner_paragraph_style}>
                Techofic is one of the leading software development companies,
                helping clients transform their existing businesses in light of
                the swiftly evolving nature of digital innovation.
              </Typography>
              <Box className={Styles.banner_button_box}>
                <Button className={Styles.banner_button_style}>
                  Let's Talk
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item>
              <Image
                src="/assets/images/bannerimage.png"
                alt="Banner picture"
                width={500}
                height={500}
              />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
