import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const FooterSubscription = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FEBC14",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#727272",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "#FEBC14",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FEBC14",
    },
  },
});

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#323232",
        padding: "35px 0px",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} xl={4}>
              <Item sx={{ textAlign: "left" }}>
                <Box
                  sx={{
                    marginBottom: "24px",
                  }}
                >
                  <Image
                    src="/assets/images/techoficlogo.svg"
                    alt="Landscape picture"
                    width={39}
                    height={47}
                  />
                  <Image
                    src="/assets/images/techoficlogotext.svg"
                    alt="Landscape picture"
                    width={161}
                    height={47}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                    marginBottom: "40px",
                  }}
                >
                  Techofic is one of the leading software development companies,
                  helping clients transform their existing businesses into
                  digital innovation.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Follow Us On
                </Typography>
                <InstagramIcon
                  sx={{
                    color: "#727272",
                    marginRight: "24px",
                    "&:hover": { color: "#FEBC14" },
                    cursor: "pointer",
                  }}
                />{" "}
                <a href="https://www.facebook.com/techofic.limited" target="_blank">

                <FacebookIcon
                  sx={{
                    color: "#727272",
                    marginRight: "24px",
                    "&:hover": { color: "#FEBC14" },
                    cursor: "pointer",
                  }}
                />
                </a>{" "}
                <TwitterIcon
                  sx={{
                    color: "#727272",
                    marginRight: "24px",
                    "&:hover": { color: "#FEBC14" },
                    cursor: "pointer",
                  }}
                />{" "}
                <a href="https://www.linkedin.com/company/techofic" target="_blank"> 
                <LinkedInIcon
                  sx={{
                    color: "#727272",
                    "&:hover": { color: "#FEBC14" },
                    cursor: "pointer",
                  }}
                />
                </a>
              </Item>
            </Grid>
            <Grid item xs={12} md={2} xl={2}>
              <Item sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Services
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Web Developmemnt</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Mobile App Development</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Digital Marketing</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Branding</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">UI/UX Design</Link>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={2} xl={2}>
              <Item sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Company
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">About Us</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">FAQ’s</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Help</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Terms & Conditions</Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                  }}
                >
                  <Link href="/">Career</Link>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Item sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#F4F4F4",
                    marginBottom: "16px",
                  }}
                >
                  Subscribe Newsletter
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Grid item xs={12}>
                      <Item>
                        <FooterSubscription
                          placeholder="Enter your email here"
                          sx={{
                            width: "100%",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  color="primary"
                                  sx={{
                                    backgroundColor: "#febc14",
                                    borderRadius: "5px",
                                    marginRight: "-6px",
                                    "&:hover": { backgroundColor: "#febc14" },
                                  }}
                                >
                                  <SendIcon
                                    sx={{
                                      color: "black",
                                      fontSize: "20px",
                                    }}
                                  />
                                </IconButton>
                              </InputAdornment>
                            ),
                            style: {
                              color: "#F4F4F4",
                            },
                          }}
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} xl={12}>
                      <Item>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: {
                              xs: "column",
                              md: "row",
                              xl: "row",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              marginRight: {
                                xs: "0px",
                                md: "16px",
                                xl: "16px",
                              },
                            }}
                          >
                            <Image
                              src="/assets/images/address.svg"
                              alt="address icon"
                              width={50}
                              height={50}
                            />
                          </Box>
                          <Box
                            sx={{
                              textAlign: {
                                xs: "center",
                                md: "left",
                                xl: "left",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "26px",
                                color: "#F4F4F4",
                                opacity: "0.6",
                              }}
                            >
                              Akther shopping city (3rd floor, unit-4b) Modina
                              market, Sylhet-3100
                            </Typography>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} xl={12}>
                      <Item>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: {
                              xs: "column",
                              md: "row",
                              xl: "row",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              marginRight: {
                                xs: "0px",
                                md: "16px",
                                xl: "16px",
                              },
                            }}
                          >
                            <Image
                              src="/assets/images/phone.svg"
                              alt="address icon"
                              width={42}
                              height={42}
                            />
                          </Box>
                          <Box
                            sx={{
                              textAlign: {
                                xs: "center",
                                md: "left",
                                xl: "left",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "26px",
                                color: "#F4F4F4",
                                opacity: "0.6",
                              }}
                            >
                              (+880) 1703-759609 , (+880) 1706-523457
                            </Typography>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>

                    <Grid item xs={12} md={12} xl={12}>
                      <Item>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: {
                              xs: "column",
                              md: "row",
                              xl: "row",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              marginRight: {
                                xs: "0px",
                                md: "16px",
                                xl: "16px",
                              },
                            }}
                          >
                            <Image
                              src="/assets/images/email.svg"
                              alt="address icon"
                              width={42}
                              height={42}
                            />
                          </Box>
                          <Box
                            sx={{
                              textAlign: {
                                xs: "center",
                                md: "left",
                                xl: "left",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "26px",
                                color: "#F4F4F4",
                                opacity: "0.6",
                              }}
                            >
                              contact@techofic.com
                            </Typography>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Divider
                  sx={{
                    backgroundColor: "#A7A7A7",
                    marginBottom: "16.35px",
                    opacity: "0.1",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#F4F4F4",
                    opacity: "0.6",
                    marginBottom:'-20px'
                  }}
                >
                  &copy; 2022 All Rights Reserved. Design By{" "}
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#FEBC14",
                    }}
                    component="span"
                  >
                    Techofic
                  </Typography>
                  .
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
