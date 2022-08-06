import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/OurCourses.module.css";
import Footer from "../shared/Footer";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function OurCourses() {
  return (
    <Box sx={{ backgroundColor: "#1d1d1d" }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ padding: "84px 0px" }}>
            <Grid item xs={12} md={12} xl={12}>
              <Item>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: "35px", md: "30px", xl: "48px" },
                    lineHeight: "72px",
                    color: "#F4F4F4",
                    marginBottom: "48px",
                  }}
                >
                  Our Courses
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcourseone.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      Web Development(Basic)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      Front-End (HTML, Java Script, CSS)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Back-End (pHp)
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 10,000{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcoursetwo.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      App Development
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      Android (Flutter, Java, React Native)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      iOS (Flutter, Swift, React Native)
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 20,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcoursethree.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      UI/UX Design(Basic)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      Design Theory
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Adobe XD, Figma
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 10,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcoursefour.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      Graphics Design
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      Design Theory
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Adobe Photoshop & Illustrator
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 10,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcoursefive.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      Programming Language
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      -C/C++, pHp
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Java Script, Python
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 8,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcoursesix.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      Markup Language
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      HTML, CSS, SAAS
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Bootstrap
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 8,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcourseseven.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      Web Development (Advanced)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      Front-End (Vue, Nuxt, React, Laravel, JS)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Back-End (Laravel, Node JS, php)
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 20,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 387,
                    padding: "24px",
                    backgroundColor: "transparent",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                  }}
                  className={Styles.ourcourse_card}
                >
                  <Box sx={{ marginBottom: "16px" }}>
                    <Image
                      src="/assets/images/ourcourseeight.svg"
                      alt="Landscape picture"
                      width={339}
                      height={190}
                    />
                  </Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "23px",
                        lineHeight: "38px",
                        color: "#F4F4F4",
                        marginBottom: "16px",
                        textAlign: "left",
                      }}
                    >
                      UI/UX Design(Advanced)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "4px",
                      }}
                    >
                      Template Design
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        // marginBottom: "16px",
                      }}
                    >
                      Product Design
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                        marginBottom: "16px",
                      }}
                    >
                      Adobe XD, Figma
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#F4F4F4",
                        textAlign: "left",
                      }}
                    >
                      BDT 18,000
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                      className={Styles.ourcourse_link}
                    >
                      {/* <Link href="/">View Details</Link> */}
                    </Typography>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
