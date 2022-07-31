import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Button, Checkbox, Container, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import Styles from "../../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));


const ContactButton = styled(Button) ({
  width:'162px',
  height:'54px',
  backgroundColor:'#FEBC14',
  borderRadius:'10px',
  fontFamily:'Lato',
  fontSize:'16px',
  fontWeight:'700',
  fontStyle:'normal',
  lineHeight:'35px',
  color:'#323232',
  textTransform:'none',
  '&:hover': {
    backgroundColor:'#FEBC14',
  }
})


export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <Box sx={{ backgroundColor: "#1d1d1d", padding: "74px 0px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
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
                    marginBottom: "48px",
                  }}
                >
                  Contact Now
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item
                sx={{
                  textAlign: { xs: "left", md: "left", xl: "left" },
                  border: "1px solid #8752A1",
                  background: "#212121",
                  borderRadius: "10px",
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
                    marginBottom: "16px",
                  }}
                >
                  Get in touch
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
                      Name:
                    </Typography>
                    <input
                      label="Name"
                      {...register("Name")}
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
                      Tell us more about your project
                    </Typography>
                    <textarea
                      {...register("description")}
                      className={Styles.contact_form_description}
                    />{" "}
                    <br />
                    <Typography sx={{ marginBottom: "26px" }}>
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
                      }}
                    >
                      <Box
                        sx={{
                          width: "159px",
                          height: "54px",
                          border: "2px solid #8752A1",
                          position: "absolute",
                          borderRadius: "10px",
                          margin: "-6px",
                        }}
                      ></Box>
                      <ContactButton type="submit">Submit</ContactButton>
                    </Box>
                  </form>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Item>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "25px",
                    lineHeight: "38px",
                    marginBottom: "16px",
                    color: "#F4F4F4",
                    textAlign: { xs: "center", md: "center", xl: "left" },
                    marginLeft: { xl: "30px" },
                  }}
                >
                  What Next?
                </Typography>
                <Box sx={{ marginLeft: { xl: "30px" }, marginBottom: "80px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    <CircleIcon
                      sx={{ fontSize: "15px", marginRight: "10px" }}
                    />{" "}
                    We reply within 3 business hours
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    <CircleIcon
                      sx={{ fontSize: "15px", marginRight: "10px" }}
                    />{" "}
                    Discuss your project on a quick call
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    <CircleIcon
                      sx={{ fontSize: "15px", marginRight: "10px" }}
                    />{" "}
                    Collect all requirements
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                      color: "#F4F4F4",
                      opacity: "0.6",
                    }}
                  >
                    <CircleIcon
                      sx={{ fontSize: "15px", marginRight: "10px" }}
                    />{" "}
                    Make a final project estimate
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/address.svg"
                          alt="address icon"
                          width={50}
                          height={50}
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={10} xl={10}>
                      <Item sx={{ textAlign: "left" }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#F4F4F4",
                          }}
                        >
                          Address
                        </Typography>
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
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/phone.svg"
                          alt="phone icon"
                          width={50}
                          height={50}
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={10} xl={10}>
                      <Item sx={{ textAlign: "left" }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#F4F4F4",
                          }}
                        >
                          Phone Number
                        </Typography>
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
                          (+880) 1706-523457
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/email.svg"
                          alt="email icon"
                          width={50}
                          height={50}
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={10} xl={10}>
                      <Item sx={{ textAlign: "left" }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#F4F4F4",
                          }}
                        >
                          Email
                        </Typography>
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
                          techofic@gmail.com
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
