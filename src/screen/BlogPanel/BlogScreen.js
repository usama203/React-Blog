import { Grid } from "@mui/material";
import React from "react";
import BlogPanel from "../../components/BlogPanel/BlogPanel";
import BlogText from "../../components/BlogPanel/BlogText";
import { Box, Container, Typography } from '@mui/material'

const BlogScreen = () => {
  return (
    <>
      <Grid container sx={{height:'400px',}}> 
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
         
        >
<BlogPanel />

        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{marginBottom:'10%' }}
        >
<BlogText />

        </Grid>
        
      </Grid>
    </>
  );
};

export default BlogScreen;
