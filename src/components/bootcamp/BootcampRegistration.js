import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Checkbox, Container, Typography } from "@mui/material";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useForm } from "react-hook-form";
import Styles from "../../styles/BootcampRegistration.module.css";
import Swal from "sweetalert2";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const BootcampFormButton = styled(Button)({
  width: "162px",
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
    backgroundColor: "#FEBC14",
  },
});

export default function BootcampRegistration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Registration Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(data);
  };

  // console.log(watch("example"));
  return (
    <Box>
      <Navbar color="#323232" />
      <Box sx={{ backgroundColor: "#1d1d1d" }}>
        <Container maxWidth="md">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ padding: "84px 0px" }}>
              <Grid item xs={12} md={12} xl={12}>
                <Item sx={{ marginBottom: "20px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: { xs: "25px", md: "30px", xl: "48px" },
                      lineHeight: "72px",
                      color: "#F4F4F4",
                      marginBottom: "8px",
                    }}
                  >
                    Bootcamp Registration
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
                    Registrations going on till 12 August 2022
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={12} xl={12}>
                <Item
                  sx={{
                    border: "1px solid #8752A1",
                    backgroundColor: "#212121",
                    borderRadius: "10px",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={2}
                      sx={{ padding: { xs: "0px", md: "0px", xl: "40px" } }}
                    >
                      <Grid item xs={12}>
                        <Item>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "25px",
                              lineHeight: "38px",
                              color: "#F4F4F4",
                            }}
                          >
                            Register Now
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Item
                          sx={{
                            textAlign: { xs: "left", md: "left", xl: "left" },
                          }}
                        >
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#FFFFFF",
                                marginBottom: "10px",
                              }}
                            >
                              Full Name:
                            </Typography>
                            <input
                              label="Name"
                              {...register("Name")}
                              placeholder="Enter your name here..."
                              className={Styles.contact_form_name}
                            />{" "}
                            <br />
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#FFFFFF",
                                marginBottom: "10px",
                              }}
                            >
                              Email:
                            </Typography>
                            <input
                              {...register("Email")}
                              placeholder="Enter your email here..."
                              className={Styles.contact_form_email}
                            />{" "}
                            <br />
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#FFFFFF",
                                marginBottom: "10px",
                              }}
                            >
                              Phone Number:
                            </Typography>
                            <input
                              {...register("Phone")}
                              placeholder="Enter your number here..."
                              className={Styles.contact_form_phone}
                            />{" "}
                            <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#FFFFFF",
                                marginBottom: "10px",
                              }}
                            >
                              What are you interested in?:
                            </Typography>
                            <select
                              {...register("interest")}
                              className={Styles.contact_form_interest}
                            >
                              <option
                                value="Web Development"
                                className={Styles.contact_form_option}
                              >
                                Web Development
                              </option>
                              <option
                                value="App Development"
                                className={Styles.contact_form_option}
                              >
                                App Development
                              </option>
                              <option
                                value="UI/UX Design"
                                className={Styles.contact_form_option}
                              >
                                UI/UX Design
                              </option>
                            </select>{" "}
                            <br />
                            {/* <Typography
                              sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#FFFFFF",
                                marginBottom: "10px",
                              }}
                            >
                              Tell us more about your project
                            </Typography>
                            <textarea
                              {...register("description")}
                              className={Styles.contact_form_description}
                            />{" "} */}
                            <br />
                            <Typography
                              sx={{ marginBottom: "26px", marginTop: "-30px" }}
                            >
                              <Checkbox
                                {...register("terms")}
                                required
                                sx={{
                                  color: "#727272",
                                  "&:hover": {
                                    color: "#febc14",
                                  },
                                  "&.Mui-checked": {
                                    color: "#FEBC14",
                                  },
                                }}
                              />
                              <Typography
                                component="span"
                                sx={{
                                  fontFamily: "Lato",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                  color: "#FFFFFF",
                                  opacity: "0.4",
                                  marginLeft: "8px",
                                  marginRight: "4px",
                                }}
                              >
                                By sumitting you agree to our
                              </Typography>
                              <Typography
                                component="span"
                                sx={{
                                  fontFamily: "Lato",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                  color: "#FFFFFF",
                                }}
                              >
                                Terms & Policy
                              </Typography>
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
                              <BootcampFormButton type="submit">
                                Submit
                              </BootcampFormButton>
                            </Box>
                          </form>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
