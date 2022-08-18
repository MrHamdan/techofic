import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Container, Divider, Typography } from "@mui/material";
import Styles from "../../styles/PopularCourses.module.css";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const ViewallcoursesButton = styled(Button)({
  width: "214px",
  height: "54px",
  backgroundColor: "#FEBC14",
  borderRadius: "10px",
  fontFamily: "Lato",
  fontSize: "16px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "35px",
  color: "#323232",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#F9921A",
  },
});

export default function PopularCourses() {
  return (
    <Box sx={{ backgroundColor: "#1d1d1d" }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} sx={{ padding: "30px 0px" }}>
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
                  }}
                >
                  Popular Courses
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item
                sx={{
                  border: "1px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  padding: "24px",
                }}
                className={Styles.popularcourses_item}
              >
                <Box sx={{ marginBottom: "16px" }}>
                  <Box className={Styles.box_design}></Box>
                  <Image
                    src="/assets/images/webdesign.svg"
                    alt="webdesign picture"
                    width={80}
                    height={80}
                    className={Styles.img_style}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <PersonOutlineIcon
                    sx={{
                      color: "#F4F4F4",
                      opacity: "0.6",
                      fontSize: "20px",
                      marginRight: "4px",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                      marginRight: "16px",
                    }}
                  >
                    34+ Enrolled
                  </Typography>
                  <ImportContactsIcon
                    sx={{
                      color: "#F4F4F4",
                      opacity: "0.6",
                      fontSize: "20px",
                      marginRight: "4px",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    20 Lessons
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "25px",
                    lineHeight: "40px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Creating responsive design via Vue
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/avatarone.svg"
                    sx={{ marginRight: "16px" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    Johanna Petricu
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    backgroundColor: "#F4F4F4",
                    opacity: "0.2",
                    marginBottom: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#f4f4f4",
                      }}
                    >
                      BDT 18,000
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#f4f4f4",
                        opacity: "0.6",
                      }}
                      className={Styles.popularcourses_link}
                    >
                      <Link href="/">View Details</Link>
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item
                sx={{
                  border: "1px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  padding: "24px",
                }}
                className={Styles.popularcourses_item}
              >
                <Box sx={{ marginBottom: "16px" }}>
                  <Box className={Styles.box_design}></Box>
                  <Image
                    src="/assets/images/uiuxdesign.svg"
                    alt="uiuxdesign picture"
                    width={80}
                    height={80}
                    className={Styles.img_style}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <PersonOutlineIcon
                    sx={{
                      color: "#F4F4F4",
                      opacity: "0.6",
                      fontSize: "20px",
                      marginRight: "4px",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                      marginRight: "16px",
                    }}
                  >
                    34+ Enrolled
                  </Typography>
                  <ImportContactsIcon
                    sx={{
                      color: "#F4F4F4",
                      opacity: "0.6",
                      fontSize: "20px",
                      marginRight: "4px",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    20 Lessons
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "25px",
                    lineHeight: "40px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Creating responsive design via Vue
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/avatarone.svg"
                    sx={{ marginRight: "16px" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    Johanna Petricu
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    backgroundColor: "#F4F4F4",
                    opacity: "0.2",
                    marginBottom: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#f4f4f4",
                      }}
                    >
                      BDT 18,000
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#f4f4f4",
                        opacity: "0.6",
                      }}
                      className={Styles.popularcourses_link}
                    >
                      <Link href="/">View Details</Link>
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item
                sx={{
                  border: "1px solid #8752A1",
                  borderRadius: "10px",
                  position: "relative",
                  textAlign: { xs: "center", md: "center", xl: "left" },
                  padding: "24px",
                }}
                className={Styles.popularcourses_item}
              >
                <Box sx={{ marginBottom: "16px" }}>
                  <Box className={Styles.box_design}></Box>
                  <Image
                    src="/assets/images/uiuxdesign.svg"
                    alt="uiuxdesign picture"
                    width={80}
                    height={80}
                    className={Styles.img_style}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <PersonOutlineIcon
                    sx={{
                      color: "#F4F4F4",
                      opacity: "0.6",
                      fontSize: "20px",
                      marginRight: "4px",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                      marginRight: "16px",
                    }}
                  >
                    34+ Enrolled
                  </Typography>
                  <ImportContactsIcon
                    sx={{
                      color: "#F4F4F4",
                      opacity: "0.6",
                      fontSize: "20px",
                      marginRight: "4px",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    20 Lessons
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "25px",
                    lineHeight: "40px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Creating responsive design via Vue
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/avatarone.svg"
                    sx={{ marginRight: "16px" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    Johanna Petricu
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    backgroundColor: "#F4F4F4",
                    opacity: "0.2",
                    marginBottom: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#f4f4f4",
                      }}
                    >
                      BDT 18,000
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "35px",
                        color: "#f4f4f4",
                        opacity: "0.6",
                      }}
                      className={Styles.popularcourses_link}
                    >
                      <Link href="/">View Details</Link>
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Item sx={{ marginTop: "52px" }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "214px",
                      height: "54px",
                      border: "2px solid #8752A1",
                      position: "absolute",
                      borderRadius: "10px",
                      marginLeft: "-8px",
                      marginTop: "-6px",
                    }}
                  ></Box>
                  <Link href="/">
                    <ViewallcoursesButton>
                      View All Courses
                    </ViewallcoursesButton>
                  </Link>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
