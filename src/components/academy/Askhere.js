import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const AskhereButton = styled(Button)({
  width: "159px",
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

export default function Askhere() {
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
                    fontWeight: "600",
                    fontSize: { xs: "18px", md: "30px", xl: "48px" },
                    lineHeight: "72px",
                    color: "#F4F4F4",
                    marginBottom: "48px",
                  }}
                >
                  Didn’t find your answer? Ask Here.
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "159px",
                      height: "54px",
                      border: "2px solid #8752A1",
                      position: "absolute",
                      borderRadius: "10px",
                      marginLeft: "-8px",
                      marginTop: "-6px",
                    }}
                  ></Box>
                  <AskhereButton>Ask Us</AskhereButton>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
