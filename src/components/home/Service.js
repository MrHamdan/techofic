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
    <Box sx={{ flexGrow: 1 }} className={Styles.service_bg}>
      <Container maxWidth="xl">
        <Grid container spacing={2} className={Styles.service_grid}>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/discovery.png"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography className={Styles.service_heading}>
                Discovery
              </Typography>
              <Typography className={Styles.service_paragraph}>
                Lorem ipsum dolor sit amet, consecte adipiscing elit quis in
                ultrices.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/design.png"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography className={Styles.service_heading}>Design</Typography>
              <Typography className={Styles.service_paragraph}>
                Lorem ipsum dolor sit amet, consecte adipiscing elit quis in
                ultrices.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/development.png"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography className={Styles.service_heading}>
                Development
              </Typography>
              <Typography className={Styles.service_paragraph}>
                Lorem ipsum dolor sit amet, consecte adipiscing elit quis in
                ultrices.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
            >
              <Image
                src="/assets/images/deliver.png"
                alt="Landscape picture"
                width={80}
                height={80}
              />
              <Typography className={Styles.service_heading}>
                Delivery
              </Typography>
              <Typography className={Styles.service_paragraph}>
                Lorem ipsum dolor sit amet, consecte adipiscing elit quis in
                ultrices.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
