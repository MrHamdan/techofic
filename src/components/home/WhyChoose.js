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

export default function WhyChoose() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Styles.whychoose_bg}>
      <Container maxWidth="xl">
        <Grid container spacing={2} className={Styles.whychoose_grid}>
          <Grid item xs={12} md={12} xl={12}>
            <Item>
              <Typography className={Styles.whychoose_heading}>
                Why Choose Us?
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
              className={Styles.whychoose_item_style}
            >
              <Typography className={Styles.whychoose_card_heading}>
                4+ years of experience:
              </Typography>
              <Typography className={Styles.whychoose_card_para}>
                Our Senior Engineers have the expertise your projects need. Our
                100% bilingual talented professionals have the practical
                experience to face every challenge and are certified in every
                technology and methodology.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
              className={Styles.whychoose_item_style}
            >
              <Typography className={Styles.whychoose_card_heading}>
                Time Zone aligned:
              </Typography>
              <Typography className={Styles.whychoose_card_para}>
                Living and working in the same time zone removes friction and
                allows for seamless integration. This makes everyday work,
                meetings, and collaboration easier.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
              className={Styles.whychoose_item_style}
            >
              <Typography className={Styles.whychoose_card_heading}>
                We hire only the Top 1% of IT Talent:
              </Typography>
              <Typography className={Styles.whychoose_card_para}>
                We thrive in finding the Top 1% IT Talent to fulfill every
                project's needs. Our team evaluates over 400 applicants every
                year to find the most talented Software Engineers and we provide
                them continuous and extensive training.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
              className={Styles.whychoose_item_style}
            >
              <Typography className={Styles.whychoose_card_heading}>
                Our Unique Approach & Process:
              </Typography>
              <Typography className={Styles.whychoose_card_para}>
                We start with a deep analysis and go forward understanding your
                needs, Then we divide our work into different parts and approach
                them to different people in ouu team.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <Item
              sx={{ textAlign: { xs: "center", md: "center", xl: "center" } }}
            >
              <Button className={Styles.whychoose_button_style}>
                Start a Business With Us
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
