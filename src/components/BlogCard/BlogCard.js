import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import carimg from '../../assets/carimg.png'
import arrow from '../../assets/Arrow.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
const BlogCard = () => {
  return (
    <>
    <Card sx={{ mx:{lg:30,md:30,sm:0,xs:0},my:10,pt:{xs:50,md:5,sm:50,lg:0} }}>
      <CardActionArea>
          <Box sx={{display:'flex'}} >
              <Box sx={{mx:2,my:2,width:"440px"}}>
        <CardMedia
          component="img"
          height="250"
        src={carimg}
          alt="green iguana"
        />
        </Box>
        <Box>
        <CardContent>
<Box sx={{display:'flex',my:2}}>
<Typography >Posted on October 6th 2021</Typography>
<Box sx={{pl:10,display:'flex'}}>
<VisibilityIcon sx={{color:'#b8b8b8',}}/>
    <Typography pl={0.2} sx={{color:'#b8b8b8',}}> 360</Typography></Box>

<Typography sx={{color:'red',position:'absolute',right:0,top:0,py:2,px:2}}>Feature</Typography>

</Box>
          <Typography  sx={{fontSize:'25px',fontWeight:'bold'}} component="div">
          Should I Buy a New Car or Lease a New Car in 2021?
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingTop={2}>
            of cars, no matter the cause. This includes, We provide a full range of front end mechanical.
          </Typography>
          <Box sx={{display:'flex' ,position:'absolute',bottom:0,mb:3,}}>
              <Typography sx={{fontWeight:'bold',fontSize:'13px',pt:0.1}}>Read more</Typography>
              <Button >
              <Box component='img' src={arrow} sx={{pl:1,width:'40px'}} />
              </Button>
          </Box>
        </CardContent>
        </Box>
        </Box>
      </CardActionArea>
     
    </Card>
    

    </>
  )
}

export default BlogCard