import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const BlogText = () => {
  return (
    <>
    <Box sx={{height:'400px',display:'flex',background:'#222020',marginBottom:5,alignItems:'center'}} >
        <Box sx={{ }}>
        <Typography sx={{color:'white',mx:5,fontSize:'25px', display: 'inline-block',width: '400px',fontWeight:'bold'}}>
        Diagnose Car Problems If You Don’t Know Much About Cars
        </Typography>
        <Typography sx={{color:'white',mx:5,fontSize:'13px', display: 'inline-block',width: '400px',mt:2}}>
        We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.
        </Typography>
        </Box>
        </Box>
    
    </>
  )
}

export default BlogText