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
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{
                padding: { xs: "40px 0px", md: "84px 0px", xl: "84px 0px" },
              }}
            >
              <Grid item xs={12} md={6} xl={6}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "30px",
                      color: "#FEBC14",
                      marginBottom: "10px",
                    }}
                  >
                    Registrations going on till 12 August 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: { xs: "30px", md: "48px", xl: "48px" },
                      lineHeight: "58px",
                      color: "#F4F4F4",
                      marginBottom: "40px",
                    }}
                  >
                    Free Bootcamp 2022 <br /> UX/UI Design
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Are you interested in ui/ux design but have no <br /> clue
                    where to start?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Join our free Bootcamp A Journey to Start As a Professional
                    UX/UI by Techofic. Becoming a good professional UX/UI is a
                    matter of time and experience. In this Bootcamp, our
                    Instructor will take 3 Classes (a total of 6 hours) to
                    discuss and explain the common concepts, and best practices
                    of UX/UI and introduce you to real-world projects. start?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    What will you get after the Bootcamp?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    After the Bootcamp will give a small assessment to the
                    viewers with a deadline. Based on the score of this
                    assessment will take a short interview of the selected
                    candidates. Both scores of the assessment and interview will
                    rank the candidates. The top 5 candidates will be awarded
                    certificates and crest. And the top candidate will be
                    offered a Techofic Internship contract.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Who can join our Bootcamp?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Anyone from Bangladesh
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    What you will learn?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    What is (UX/UI)? <br /> The future of Ui/Ux Design <br />
                    Design Thinking <br /> Design Principals <br /> All about
                    Design Tools <br /> Good and Bad Ui Design <br /> UI
                    Designer’s Road Map <br /> Design Resources
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    What are the requirements?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Basic Idea of graphics design <br /> Basics of the design
                    tools.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Who are the instructors?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    Minhajul Abeeden <br /> UI/UX Designer, LEXIT
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    When will our Bootcamp start?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#A0A0A0",
                      marginBottom: "40px",
                    }}
                  >
                    We will start our Bootcamp in the middle of August 2022
                    depending on your responses.
                  </Typography>
                </Item>
              </Grid>
              {/* <Grid item xs={12} md={6} xl={6}>
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
              </Grid> */}
              <Grid item xs={12} md={6} xl={6}>
                <Item
                  sx={{
                    border: "1px solid #8752A1",
                    backgroundColor: "#212121",
                    borderRadius: "10px",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item
                          sx={{
                            textAlign: { xs: "left", md: "left", xl: "left" },
                            padding: "40px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "25px",
                              lineHeight: "38px",
                              color: "#F4F4F4",
                              textAlign: "left",
                              marginBottom: "16px",
                            }}
                          >
                            Register Now
                          </Typography>
                          <Box>
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
                                required
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
                                required
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
                                required
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
                                required
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
                                sx={{
                                  marginBottom: "26px",
                                  marginTop: "-30px",
                                }}
                              >
                                <Checkbox
                                  {...register("terms")}
                                  sx={{
                                    color: "#727272",
                                    "&:hover": {
                                      color: "#febc14",
                                    },
                                    "&.Mui-checked": {
                                      color: "#FEBC14",
                                    },
                                  }}
                                  required
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
                                  justifyContent: {xs:'center', md:'right', xl:'right'},
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
                          </Box>
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
