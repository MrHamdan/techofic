import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "../../styles/OurServices.module.css";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function OurServices() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Styles.ourservices_bg}>
      <Container maxWidth="xl">
        <Grid container spacing={0} className={Styles.ourservices_grid}>
          <Grid item xs={12} md={12} xl={12}>
            <Item>
              <Typography className={Styles.ourservices_heading}>
                Our Services
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <Item>
              <Typography className={Styles.ourservices_para}>
                From beginning ideas to individual integrity from the line on
                the paper to final projects.
              </Typography>
            </Item>
          </Grid>
          <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={3}>
                <Item
                  sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
                  className={Styles.ourservices_item}
                >
                  <Image
                    src="/assets/images/webdesign.png"
                    alt="webdesign picture"
                    width={80}
                    height={80}
                  />
                  <Typography className={Styles.ourservices_card_heading}>
                    Web Design and Developments
                  </Typography>
                  <Typography className={Styles.ourservices_card_para}>
                    Provide our customers with optimized user-friendly
                    experience to increase the efficiency of digital products.
                  </Typography>
                  <Typography
                    sx={{
                      justifyContent: {
                        xs: "center",
                        md: "center",
                        xl: "left",
                      },
                    }}
                    className={Styles.ourservices_card_link}
                  >
                    Learn More{" "}
                    <ArrowForwardIcon
                      className={Styles.ourservices_link_icon}
                    />
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <Item
                  sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
                  className={Styles.ourservices_item}
                >
                  <Image
                    src="/assets/images/mobileapp.png"
                    alt="mobileapp picture"
                    width={80}
                    height={80}
                  />
                  <Typography className={Styles.ourservices_card_heading}>
                    Mobile App and Development
                  </Typography>
                  <Typography className={Styles.ourservices_card_para}>
                    Mobile application development is a highlight that
                    businesses are interested in at the moment and in the
                    future.
                  </Typography>
                  <Typography
                    sx={{
                      justifyContent: {
                        xs: "center",
                        md: "center",
                        xl: "left",
                      },
                    }}
                    className={Styles.ourservices_card_link}
                  >
                    Learn More{" "}
                    <ArrowForwardIcon
                      className={Styles.ourservices_link_icon}
                    />
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <Item
                  sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
                  className={Styles.ourservices_item}
                >
                  <Image
                    src="/assets/images/digitalmarketing.png"
                    alt="digitalmarketing picture"
                    width={80}
                    height={80}
                  />
                  <Typography className={Styles.ourservices_card_heading}>
                    Digital Marketing and Branding
                  </Typography>
                  <Typography className={Styles.ourservices_card_para}>
                    Understanding the business and their target customers, we're
                    the bridges to bring the brand closer to their clients.
                  </Typography>
                  <Typography
                    sx={{
                      justifyContent: {
                        xs: "center",
                        md: "center",
                        xl: "left",
                      },
                    }}
                    className={Styles.ourservices_card_link}
                  >
                    Learn More{" "}
                    <ArrowForwardIcon
                      className={Styles.ourservices_link_icon}
                    />
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <Item
                  sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
                  className={Styles.ourservices_item}
                >
                  <Image
                    src="/assets/images/uiuxdesign.png"
                    alt="uiuxdesign picture"
                    width={80}
                    height={80}
                  />
                  <Typography className={Styles.ourservices_card_heading}>
                    UI/UX Design and Developments
                  </Typography>
                  <Typography className={Styles.ourservices_card_para}>
                    Help you translate your existing design or concept and work
                    with you to develop the ideal design.
                  </Typography>
                  <Typography
                    sx={{
                      justifyContent: {
                        xs: "center",
                        md: "center",
                        xl: "left",
                      },
                    }}
                    className={Styles.ourservices_card_link}
                  >
                    Learn More{" "}
                    <ArrowForwardIcon
                      className={Styles.ourservices_link_icon}
                    />
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
