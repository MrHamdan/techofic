import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "../../styles/Solutions.module.css";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import Image from "next/image";
import CustomExpandIcon from "../shared/CustomExpandIcon";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function Solutions() {
  return (
    <Box
      sx={{
        background: 'url("/assets/images/solutionsbackground.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{
              padding: "200px 0px",
            }}
          >
            <Grid item xs={12} md={6} xl={6}>
              <Item>
                <Image
                  src="/assets/images/solutionsimage.svg"
                  alt="Landscape picture"
                  width={542.56}
                  height={517}
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item
                sx={{ textAlign: { xs: "center", md: "center", xl: "left" } }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "48px",
                    lineHeight: "58px",
                    color: "#F4F4F4",
                    marginBottom: "34px",
                  }}
                >
                  We provide It Solutions & Services
                </Typography>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "4px",
                    marginBottom: "20px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "25px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                      }}
                    >
                      Who Are We?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                    >
                      We base our Software Development base on Standalone
                      Applications, Websites & Web Apps, Mobile Apps, and
                      Embedded Software. Apps that can run on a PC without an
                      internet connection are called standalone apps. Web
                      browser-based applications and websites fall under this
                      category. The vast majority of the material is produced on
                      the server, delivered to the client, and then displayed.
                      Run on mobile devices, mobile apps are a combination of
                      standalone and web programs. Small devices typically have
                      embedded software that serves a specific purpose.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "4px",
                    marginBottom: "20px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "25px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                      }}
                    >
                      Our Mission
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                    >
                      Exceed the clients expectations by providing the most
                      outstanding web solutions that go beyond software to
                      translate data into knowledge, enabling the client to
                      address the issues they are facing. We strive for
                      innovation not only in our development venture, but in
                      every element of our company as well.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "4px",
                    marginBottom: "20px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "25px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                      }}
                    >
                      Our Vission
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "35px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                      }}
                    >
                      Our goal is to strengthen our position in the market and
                      become an industry leader in web solution provision within
                      the information technology sector. Because we are aware
                      that the expansion of our customers businesses directly
                      correlates to our expansion, we promise to each of our
                      clients that we will assist them in reaching their
                      professional objectives. We believe that work should be
                      done to the highest possible standard of accuracy. Within
                      the information technology sector, one of our primary
                      goals is to earn a reputation for being a dependable,
                      inventive, and user-friendly software service provider.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
