import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // background: "linear-gradient(to right, #74ebb4, #3b72df)",
    background: "#222020",
    width: "100%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "45px !important",
    "@media (max-width: 600px)": {
      fontSize: "20px !important",
    },
  },
  listhead: {
    color: "white",
    fontWeight: "bold",
    fontSize: "22px !important",
    "@media (max-width: 600px)": {
      fontSize: "10px !important",
     
    },
  },

  listItm: {
      opacity:0.6,
     
    color: "white",
    cursor: "pointer",
    fontSize: "18px !important",
    wordBreak: "break-all",
    "@media (max-width: 600px)": {
      fontSize: "10px !important",
    },
    "@media (max-width: 400px)": {
      fontSize: "8px !important",
    },
  },
});

function UPFooter() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth={"lg"}>
        <Box
          component="div"
          sx={{
            height: "1px",
            mt: { lg: 10, xs: 5, md: 8 },
            backgroundColor: "white",
            width: "100%",
          }}
        ></Box>
        <Grid container sx={{ pt: { lg: 8, xs: 4, md: 6 } }} pb={4}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            sx={{ pr: { lg: 4, xs: 1 }, pl: { lg: 4, xs: 1 } }}
          >
            <Typography className={classes.title}>Get in touch with us for your services</Typography>
            <Box display="flex" justifyContent={"flex-start"} pb={4} pr={0}>
          <Box display="flex" justifyContent={"space-between"}>
            <InstagramIcon
              sx={{ fill: "white", pl: 1, pr: 1,pt:3, fontSize: "30px" }}
            />
            <TwitterIcon
              sx={{ fill: "white", pl: 1, pr: 1,pt:3, fontSize: "30px" }}
            />
            <FacebookIcon
              sx={{ fill: "white", pl: 1, pr: 1,pt:3, fontSize: "30px" }}
            />
          </Box>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} px={10}>
            
            <List>
              <ListItem disablePadding>
                <Typography
                  onClick={() => navigate("/")}
                  className={classes.listItm}
                >
                  Help line Number
                </Typography>
                
              </ListItem>
              <Typography className={classes.listhead}>1800 265 24 52</Typography>
              <ListItem disablePadding>
                <Typography
                  onClick={() => navigate("/")}
                  className={classes.listItm}
                  paddingTop={2}
                >
                  Address
                </Typography>
                
              </ListItem>
              <Typography className={classes.listhead}>NH 234   Public Square San Francisco  65368</Typography>
              <ListItem disablePadding>
                <Typography
                  onClick={() => navigate("/")}
                  className={classes.listItm}
                >
                  We are open
                </Typography>
                
              </ListItem>
              <Typography className={classes.listhead} paddingTop={2}>Monday to Friday 9:00 AM to  10:00  AM</Typography>
             
            </List>
          </Grid>
         
        </Grid>
       
      </Container>
    </Box>
  );
}

export default UPFooter;