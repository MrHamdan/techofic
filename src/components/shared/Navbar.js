import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import Styles from "../../styles/Navbar.module.css";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const pages = ["About Us", "Services", "Products", "Blogs", "Pages"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomLinkButton = styled(Button)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
  color: "white",
  textTransform: "none",
  "&:hover": {
    color: "#febc14",
  },
});

const ContactUsButton = styled(Button)({
  width: "159px",
  height: "48px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "35px",
  borderRadius: "10px",
  textTransform: "none",
  border: "1px solid #febc14",
  backgroundColor: "transparent",
  color: "white",
  "&:hover": {
    backgroundColor: "#febc14",
    color: "#1d1d1d",
  },
});

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: props.color }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/assets/images/techoficlogo.svg"
            alt="Techofic logo"
            width={32.64}
            height={39.19}
          />
          <Image
            src="/assets/images/techoficlogotext.svg"
            alt="Techofic logo"
            width={144.14}
            height={19.92}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#febc14" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <CustomLinkButton
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/">Academy</Link>
            </CustomLinkButton>
            <CustomLinkButton
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/">About Us</Link>
            </CustomLinkButton>
            <CustomLinkButton
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/">Services</Link>
            </CustomLinkButton>
            <CustomLinkButton
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/">Products</Link>
            </CustomLinkButton>
            <CustomLinkButton
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/">Blogs</Link>
            </CustomLinkButton>
            <CustomLinkButton
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/">Pages</Link>
            </CustomLinkButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ContactUsButton
              sx={{ display: { xs: "none", md: "block", xl: "block" } }}
            >
              Contact Us
            </ContactUsButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
