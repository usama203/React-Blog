import React from "react";
import Image from "../../assets/Image.png";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import rightHalf from "../../assets/images/right-2.png";


const useStyle = makeStyles({


  article: {
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
 marginBottom:5
},

picture: {
    objectFit: 'cover',
    width: '100%',
    height: '300px',
   
},


});

const BlogPanel = () => {
  const classess = useStyle();
  
  return (
    <>
       <Box className={classess.article}>
      <Box component='img' className={classess.image} src={Image} alt="background" />
     
     
      <Typography sx={{ fontSize: '60px', color: 'white', alignItems:'center',textAlign: 'center', position: 'absolute', top: 0,bottom: 0,left: 0, right: 0,paddingTop:18, margin: 'auto',background: 'rgba(0,0,0,0.6)',fontWeight:'bold', height:'100vh fit-content',  }} >Our Blog</Typography>
 
    </Box>
    </>
  );
};

export default BlogPanel;
