import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import CustomExpandIcon from "../shared/CustomExpandIcon";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function Faq() {
  return (
    <Box sx={{ backgroundColor: "#1d1d1d" }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, padding: "84px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} xl={12}>
              <Item>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: "35px", md: "30px", xl: "61px" },
                    lineHeight: "92px",
                    color: "#F4F4F4",
                  }}
                >
                  FAQ’s
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Item>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                    padding: "14px",
                    marginBottom: "16px",
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
                        fontSize: { xs: "20px", md: "30px", xl: "25px" },
                        lineHeight: "38px",
                        color: "#F4F4F4",
                      }}
                    >
                      Do you take online courses?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pretium est feugiat ornare amet sit senectus aliquet
                      suspendisse. Tincidunt molestie volutpat sit nunc
                      condimentum faucibus nulla neque. Nisl, aliquet id et
                      velit molestie pretium. Aliquet pellentesque elit egestas
                      neque risus. Pharetra dolor vel magna urna. Proin ut orci
                      id sodales massa pulvinar etiam amet habitasse.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                    padding: "14px",
                    marginBottom: "16px",
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
                        fontSize: { xs: "20px", md: "30px", xl: "25px" },
                        lineHeight: "38px",
                        color: "#F4F4F4",
                      }}
                    >
                      How long does a course take to complete?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pretium est feugiat ornare amet sit senectus aliquet
                      suspendisse. Tincidunt molestie volutpat sit nunc
                      condimentum faucibus nulla neque. Nisl, aliquet id et
                      velit molestie pretium. Aliquet pellentesque elit egestas
                      neque risus. Pharetra dolor vel magna urna. Proin ut orci
                      id sodales massa pulvinar etiam amet habitasse.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                    padding: "14px",
                    marginBottom: "16px",
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
                        fontSize: { xs: "20px", md: "30px", xl: "25px" },
                        lineHeight: "38px",
                        color: "#F4F4F4",
                      }}
                    >
                      Are classes conducted everyday?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pretium est feugiat ornare amet sit senectus aliquet
                      suspendisse. Tincidunt molestie volutpat sit nunc
                      condimentum faucibus nulla neque. Nisl, aliquet id et
                      velit molestie pretium. Aliquet pellentesque elit egestas
                      neque risus. Pharetra dolor vel magna urna. Proin ut orci
                      id sodales massa pulvinar etiam amet habitasse.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    backgroundColor: "#2B262E",
                    border: "1px solid #8752A1",
                    borderRadius: "10px",
                    padding: "14px",
                    marginBottom: "16px",
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
                        fontSize: { xs: "20px", md: "30px", xl: "25px" },
                        lineHeight: "38px",
                        color: "#F4F4F4",
                      }}
                    >
                      Is there any free course?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#F4F4F4",
                        opacity: "0.6",
                        textAlign: "left",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pretium est feugiat ornare amet sit senectus aliquet
                      suspendisse. Tincidunt molestie volutpat sit nunc
                      condimentum faucibus nulla neque. Nisl, aliquet id et
                      velit molestie pretium. Aliquet pellentesque elit egestas
                      neque risus. Pharetra dolor vel magna urna. Proin ut orci
                      id sodales massa pulvinar etiam amet habitasse.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
