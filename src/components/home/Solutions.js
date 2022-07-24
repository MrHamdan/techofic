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
    <Box sx={{ flexGrow: 1 }} className={Styles.solutions_bg}>
      <Container maxWidth="xl">
        <Grid container spacing={2} className={Styles.solutions_grid}>
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
              <Typography className={Styles.solutions_heading}>
                We provide It Solutions & Services
              </Typography>
              <Accordion className={Styles.solutions_accordion_style}>
                <AccordionSummary
                  expandIcon={<CustomExpandIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={Styles.solutions_accordion_heading}>
                    Who Are We?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={Styles.solutions_accordion_para}>
                    We are a growing startup software agency where we strive to
                    provide the best service worldwide. We had a remote team
                    working from different parts of the world. Our team is
                    dedicated in working and learning further to grow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={Styles.solutions_accordion_style}>
                <AccordionSummary
                  expandIcon={<CustomExpandIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={Styles.solutions_accordion_heading}>
                    Our Mission
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={Styles.solutions_accordion_para}>
                    We are a growing startup software agency where we strive to
                    provide the best service worldwide. We had a remote team
                    working from different parts of the world. Our team is
                    dedicated in working and learning further to grow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={Styles.solutions_accordion_style}>
                <AccordionSummary
                  expandIcon={<CustomExpandIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={Styles.solutions_accordion_heading}>
                    Our Vission
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={Styles.solutions_accordion_para}>
                    We are a growing startup software agency where we strive to
                    provide the best service worldwide. We had a remote team
                    working from different parts of the world. Our team is
                    dedicated in working and learning further to grow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
