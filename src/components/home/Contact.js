import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Container, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import Styles from "../../styles/Contact.module.css";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Styles.contact_bg}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <Item>
              <Typography className={Styles.contact_heading}>
                Contact Now
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item>
              <Typography className={Styles.contact_form_heading}>
                Get in touch
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
