import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Checkbox, Container, Typography } from "@mui/material";
import Navbar from "../shared/bootNavbar";
import Footer from "../shared/Footer";
import { useForm } from "react-hook-form";
import Styles from "../../styles/BootcampRegistration.module.css";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { createBlog } from "../../store/actions/actions";
import { useRouter } from 'next/router'

import Uiux from './Uiux';
import AppDevelopment from './AppDevelopment';
import BackendDevelopment from './BackendDevelopment';
import FrontendDevelopment from './FrontendDevelopment';


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
  const router = useRouter();
  const pathName = router.asPath;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
   const onSubmit = async (data , e ) => {

 
    await dispatch(createBlog(data));

    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Registration Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset(); 
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
                padding: { xs: "40px 0px", md: "84px 0px", xl: "60px 0px" },
              }}
            >
              { pathName === "/bootcamp/uiux" ? <Uiux /> :<></> }
              { pathName === "/bootcamp/app_development" ? <AppDevelopment /> :<></> }
              { pathName === "/bootcamp/frontend_development" ? <FrontendDevelopment /> :<></> }
              { pathName === "/bootcamp/backend_development" ? <BackendDevelopment /> :<></> }
              
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
                            <Grid container spacing={2}>
                            <Grid item xs={6}>
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
                                First Name
                              </Typography>
                              <input
                                label="First Name"
                                {...register("first_name")}
                                placeholder="Enter your name here..."
                                className={Styles.contact_form_name}
                                required
                              />{" "}
                              </Grid>
                            <Grid item xs={6}>
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
                                Last Name
                              </Typography>
                              <input
                                label="Last Name"
                                {...register("last_name")}
                                placeholder="Enter your name here..."
                                className={Styles.contact_form_name}
                                required
                              />{" "}
                              </Grid>
                              </Grid>
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
                                {...register("email")}
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
                                {...register("phone")}
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
                               Profession
                              </Typography>
                              <select
                                {...register("profession")}
                                placeholder="Select Your Profession"
                                className={Styles.contact_form_interest}
                                required
                              >
                                {/* <option
                                  value=""
                                  disabled
                                  className={Styles.contact_form_option}
                                >
                                  Select Your Profession
                                </option> */}
                                <option
                                  value="Student"
                                  className={Styles.contact_form_option}
                                >
                                  Student
                                </option>
                                <option
                                  value="Job Holder"
                                  className={Styles.contact_form_option}
                                >
                                  Job Holder
                                </option>
                              </select>{" "}
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
                                {...register("interest_type")}
                               
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
                                    marginRight: "8px",
                                    marginTop: "-8px",
                                  }}
                                ></Box>
                                <BootcampFormButton type="submit"  disabled={pathName != '/bootcamp/uiux'} >
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
