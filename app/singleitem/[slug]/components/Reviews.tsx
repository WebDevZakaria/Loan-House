"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';



import Chip from '@mui/material/Chip';

import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import ZEDK from '../../../public/assets/zedk.jpg'
import Image from 'next/image';

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
function Reviews() {
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
  
  return (
    <div className="mt-[140px] lg:h-[500px]">


        <h1 className='text-[40px] mb-8'>Reviews</h1>

        <form>


        <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',mb:4
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <TextField id="standard-basic" label="Write Your Review" variant="standard" />
    </Box>

    <Stack direction="row" spacing={2} className='mt-8 mb-20'>
      <Button variant="contained">Submit</Button>
    </Stack>
    </form>

<div className='mb-8 h-[600px]'>
    <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>

     <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',mb:4 }}>
      <Box sx={{ my: 3, mx: 2 }}>

      <Stack direction="row">
      <Avatar alt="Remy Sharp" src='public/assets/zedk.jpg' />
      </Stack>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
             bouregbi Zakaria
            </Typography>
          </Grid>
          
          <Grid item>
          <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
        
      </Box>
      <Divider variant="middle" />
      <Typography color="text.secondary" variant="body2" className='mt-8'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
     
    </Box>
    </div>

    </div>
  )

}



export default Reviews