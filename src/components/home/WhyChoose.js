import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Styles from "../../styles/WhyChoose.module.css";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const SolutionsButton = styled(Button)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "35px",
  textAlign: "center",
  color: "#F4F4F4",
  width: "253px",
  height: "54px",
  border: "1px solid #FEBC14",
  borderRadius: "10px",
  textTransform: "none",
  marginTop: "64px",
});

export default function WhyChoose() {
  return (
    <Box
      sx={{
        backgroundColor: "#323232",
        padding: "84px 0px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
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
          <Grid item xs={12} md={8} xl={8}>
            <Item>
              <Box sx={{ flexGrow: 1 }}>
                <Container maxWidth="lg">
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Item>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid
                            container
                            spacing={2}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Grid item xs={12} md={3} xl={3}>
                              <Item>
                                <Image
                                  src="/assets/images/puzzle.svg"
                                  alt="Landscape picture"
                                  width={107}
                                  height={102}
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={12} md={9} xl={9}>
                              <Item
                                sx={{
                                  textAlign: {
                                    xs: "center",
                                    md: "center",
                                    xl: "left",
                                  },
                                  border: "2px solid #8752A1",
                                  borderRadius: "10px",
                                  padding: "24px",
                                }}
                              >
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
                                  Our Senior Engineers have the knowledge and
                                  experience that your projects require. Our
                                  bilingual talented professionals have the
                                  practical experience to meet any challenge and
                                  are certified in all technologies and
                                  methodologies.
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12}>
                      <Item>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid
                            container
                            spacing={2}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Grid
                              item
                              xs={12}
                              md={3}
                              xl={3}
                              sx={{
                                display: {
                                  xs: "block",
                                  md: "none",
                                  xl: "none",
                                },
                              }}
                            >
                              <Item>
                                <Image
                                  src="/assets/images/pen.svg"
                                  alt="Landscape picture"
                                  width={106}
                                  height={95}
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={12} md={9} xl={9}>
                              <Item
                                sx={{
                                  textAlign: {
                                    xs: "center",
                                    md: "center",
                                    xl: "left",
                                  },
                                  border: "2px solid #8752A1",
                                  borderRadius: "10px",
                                  padding: "24px",
                                }}
                              >
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
                                  We hire the Top 1% of IT Talent:
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
                                  We thrive on identifying the top 1% of IT
                                  talent to meet the demands of each project.
                                  Every year, our team evaluates over 400
                                  applicants to find the most talented Software
                                  Engineers, and we provide them with ongoing
                                  and extensive training.
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={3}
                              xl={3}
                              sx={{
                                display: {
                                  xs: "none",
                                  md: "block",
                                  xl: "block",
                                },
                              }}
                            >
                              <Item>
                                <Image
                                  src="/assets/images/pen.svg"
                                  alt="Landscape picture"
                                  width={106}
                                  height={95}
                                />
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12}>
                      <Item>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid
                            container
                            spacing={2}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Grid item xs={12} md={3} xl={3}>
                              <Item>
                                <Image
                                  src="/assets/images/navigation.svg"
                                  alt="Landscape picture"
                                  width={133}
                                  height={116}
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={12} md={9} xl={9}>
                              <Item
                                sx={{
                                  textAlign: {
                                    xs: "center",
                                    md: "center",
                                    xl: "left",
                                  },
                                  border: "2px solid #8752A1",
                                  borderRadius: "10px",
                                  padding: "24px",
                                }}
                              >
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
                                  Living and working in the same time zone makes
                                  it less likely that things will get in the way
                                  and makes it easier to integrate new
                                  processes. This makes it easier to do work,
                                  get together with other people, and have
                                  meetings.
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12}>
                      <Item>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid
                            container
                            spacing={2}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Grid
                              item
                              xs={12}
                              md={3}
                              xl={3}
                              sx={{
                                display: {
                                  xs: "block",
                                  md: "none",
                                  xl: "none",
                                },
                              }}
                            >
                              <Image
                                src="/assets/images/books.svg"
                                alt="Landscape picture"
                                width={158}
                                height={63}
                              />
                            </Grid>
                            <Grid item xs={12} md={9} xl={9}>
                              <Item
                                sx={{
                                  textAlign: {
                                    xs: "center",
                                    md: "center",
                                    xl: "left",
                                  },
                                  border: "2px solid #8752A1",
                                  borderRadius: "10px",
                                  padding: "24px",
                                }}
                              >
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
                                  After doing an in-depth analysis and getting a
                                  better knowledge of your requirements, we
                                  break down our work into several distinct
                                  components and assign each of those parts to a
                                  different member of our team.
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={3}
                              xl={3}
                              sx={{
                                display: {
                                  xs: "none",
                                  md: "block",
                                  xl: "block",
                                },
                              }}
                            >
                              <Image
                                src="/assets/images/books.svg"
                                alt="Landscape picture"
                                width={158}
                                height={63}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Item sx={{ textAlign: "right", padding: "0px" }}>
              <Image
                src="/assets/images/whychoosepicture.svg"
                alt="Landscape picture"
                width={516}
                height={616}
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <Item>
              <SolutionsButton>Start a Business With Us</SolutionsButton>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
