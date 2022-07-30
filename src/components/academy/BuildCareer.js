import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:theme.shadows[0],
}));

export default function BuildCareer() {
  return (
    <Box sx={{ backgroundColor: "#1d1d1d" }}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
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
                  }}
                >
                  Build Your Career Wth Techofic
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Item>
                <Image
                  src="/assets/images/buildcareer.svg"
                  alt="Landscape picture"
                  width={1202}
                  height={668}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
