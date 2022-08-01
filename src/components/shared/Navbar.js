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
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const pages = ["About Us", "Services", "Products", "Blogs", "Pages"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomLinkButton = styled(Button)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
  color: "#9E9E9E",
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
  color: "#FEBC14",
  "&:hover": {
    backgroundColor: "#febc14",
    color: "#1d1d1d",
  },
});

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
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
      </Typography>
      <Divider sx={{ backgroundColor: "#A7A7A7" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{
                color: "#9E9E9E",
                "&:hover": {
                  color: "#febc14",
                },
              }}
            >
              <Link href="/academy">Academy</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{
                color: "#9E9E9E",
                "&:hover": {
                  color: "#febc14",
                },
              }}
            >
              <Link href="/">About Us</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{
                color: "#9E9E9E",
                "&:hover": {
                  color: "#febc14",
                },
              }}
            >
              <Link href="/">Services</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{
                color: "#9E9E9E",
                "&:hover": {
                  color: "#febc14",
                },
              }}
            >
              <Link href="/">Products</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{
                color: "#9E9E9E",
                "&:hover": {
                  color: "#febc14",
                },
              }}
            >
              <Link href="/">Blogs</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{
                color: "#9E9E9E",
                "&:hover": {
                  color: "#febc14",
                },
              }}
            >
              <Link href="/">Pages</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
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
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: props.color, paddingBottom:'20px' }}
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 0,
                flexGrow: 1,
                display: { xs: "flex", md: "none", xl: "none", lg: "none" },
                justifyContent:'right'
              }}
            >
              <MenuIcon sx={{color:'#FEBC14'}}/>
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CustomLinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: "block" }}
              >
                <Link href="/academy">Academy</Link>
              </CustomLinkButton>
              <CustomLinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: "block" }}
              >
                <Link href="/">About Us</Link>
              </CustomLinkButton>
              <CustomLinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: "block" }}
              >
                <Link href="/">Services</Link>
              </CustomLinkButton>
              <CustomLinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: "block" }}
              >
                <Link href="/">Products</Link>
              </CustomLinkButton>
              <CustomLinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: "block" }}
              >
                <Link href="/">Blogs</Link>
              </CustomLinkButton>
              <CustomLinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: "block" }}
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#323232",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Navbar;
