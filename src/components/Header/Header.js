import React, { useState, useEffect } from "react";

import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import logo from "../../assets/Logo.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const navigationLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "about-us" },
  { name: "Services", to: "services" },
  { name: "Blog", to: "blog" },
  { name: "Contact", to: "contact" },
];

const useStyles = makeStyles(() => ({
  desk: {
    padding: "0px 14px",
    color: "white !important",
    listStyle: "none",
    textDecoration: "none",
    fontWeight: 600,
    fontFamily: "calbiri , sans-serif !important",
    cursor: "pointer",
    "&:hover": { color: "#74ebb4" },
    fontSize: "14px",
    "@media (min-width: 954px) and (max-width: 998px)": {
      fontSize: "12px",
    },
  },
  desk2: {
    color: "#74ebb4 !important",

    padding: "20px 14px",
    fontWeight: 600,
    marginTop: "-5px",
    fontFamily: "calbiri , sans-serif !important",
    cursor: "pointer",
    "&:hover": { color: "#74ebb4" },
    fontSize: "14px",
    "@media (min-width: 954px) and (max-width: 998px)": {
      fontSize: "12px",
    },
  },
  btnhover: {
    "&:hover": { background: "#FDA837 !important" },
  },
  navcolor: {
    color: "#FDA837",
  },

  navBg: {
    background: "linear-gradient(to right, #FFFFFF, #FFFFFF)",
    // background: "#2084da",
    color: "black",
  },
  navBg2: {
    background: "black",
  },

  mob: {
    color: "#FDA837",
    fontSize: 15,
    fontWeight: 600,
    marginTop: "-8px",
    fontFamily: "calbiri , sans-serif !important",
    cursor: "pointer",
    "&:hover": { color: "#FDA837" },
  },
  mob2: {
    color: "black",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "calbiri , sans-serif !important",
    cursor: "pointer",
    "&:hover": { color: "#FDA837" },
  },
  fontF: {
    fontFamily: "calbiri",
  },
}));

const Header = ({ children }) => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  }, [window.scrollY]);
  let location = useLocation();
  return (
    <>
      <AppBar position="sticky" className={classes.navBg}>
        <ToolBar>
          <Grid container>
            <Grid
              item
              md={3}
              sm={3}
              xs={3}
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "start",
                px: { lg: 10, md: 10, sm: 2, xs: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  px: { lg: 10, md: 10, sm: 2, xs: 2 },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  onClick={() => navigate("/home")}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={9}
              sm={9}
              xs={9}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: { lg: 15, md: 5, sm: 1, xs: 1 },
                }}
              >
                <Hidden smDown>
                  {navigationLinks.map((item, index) => {
                    return (
                      <Box
                        key={item.name}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          className={
                            location.pathname === item.to
                              ? classes.desk2
                              : classes.desk
                          }
                          onClick={() => {
                            navigate(item.to);
                          }}
                          variant="button"
                          underline="none"
                          color="black !important"
                        >
                          {item.name}
                        </Link>
                      </Box>
                    );
                  })}
                </Hidden>
                <Hidden smUp>
                  <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon style={{ color: "black" }} />
                  </IconButton>
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </ToolBar>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item, index) => (
              <ListItem key={item.name}>
                <Link
                  className={
                    location.pathname === item.name ? classes.mob : classes.mob2
                  }
                  onClick={() => {
                    navigate(item.to);
                  }}
                  variant="button"
                  underline="none"
                  color="black !important"
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            style={{
              color: "white",
              border: "1px solid white",
              borderRadius: "20px",
              fontFamily: "calbiri",
            }}
            onClick={() => {
              navigate("/ContactUs");
            }}
          >
            CONTACT US
          </Button>
        </SwipeableDrawer>
      </AppBar>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Header;
