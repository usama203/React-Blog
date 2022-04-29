import { Box, Grid } from '@mui/material';
import React from 'react'
import { blogList } from '../../api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from '../../redux/reducers/counter';
const BlogList = () => {
  const dispatch = useDispatch();
  const[count,setCount]=React.useState(0);

const [dataslice,setData]=React.useState([]);
const [load,setLoad]=React.useState(6)
    const getData = () => {
        blogList.getBlog().then((res) => {
            setData(res?.data);
            console.log(res.data,'data')
        });
       
      };
   React.useEffect(() => {
        getData();
      }, []);


      const handleIncrement = () => {
        
        dispatch(incrementCount());
        setCount(count + 1);
        
      };


      const loadMore=()=>{
          setLoad(load+6)
      }
      const data= dataslice.slice(0,load);
  return (
    <>
   <Box sx={{mx:20,my:10}}>
    <Grid container spacing={0}>
    {data.map((item) => {
 return   <Grid item sx={{px:2,py:5}}  key={item.id} xs={12}sm={6}md={4}lg={4}>
 
 
              
  <Card    sx={{ height: 400,color: 'inherit', textDecoration: 'inherit' }} component={Link} to={`/blog/${item.id}`}>

     <CardMedia
        component="img"
        height="140"
        image={item.Image}
        alt="green iguana"
      />
      <Box sx={{display:'flex',my:2}}>
<Typography >Posted on October 6th 2021</Typography>
<Box sx={{pl:10,display:'flex'}}>
<VisibilityIcon sx={{color:'#b8b8b8',}}/>
    <Typography pl={0.2} sx={{color:'#b8b8b8',}}> {count}</Typography></Box>



</Box>
      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight='bold' component="div">
         {item.Title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
         {item.Subtitle}
        </Typography>
      </CardContent>
    
    </Card>

  </Grid>
    })}
</Grid>
<Box sx={{display:'flex',justifyContent:'center'}}>
<Button onClick={loadMore} variant="contained" sx={{background:'black', }}>Load More</Button>
</Box>
</Box>
    </>
  )
}

export default BlogList



