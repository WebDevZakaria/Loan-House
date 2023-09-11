import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HOUSE5 from '../../../public/assets/room.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { ItemCardType } from './Searchbar';


interface Props {

  house:ItemCardType;


}



function CardCat({house}:Props) {


  return (
    <div>
        <div className=''>
        <div className=''>
        <Link href={`/singleitem/${house.slug}`}>
       <Card sx={{ maxWidth: 345 }} className='mr-8'>
      <CardMedia
        
      ><Image src = {HOUSE5} alt='' /></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {house.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {house.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Loan Now</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </Link>  
    </div>
    {/* 
    <div>
    <Card sx={{ maxWidth: 345 }} className='mr-8'>
      <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
    </div>
    <div className='flex mb-8'>
    <div>
    <Card sx={{ maxWidth: 345 }} className='mr-8'>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
    
    <div>
    <Card sx={{ maxWidth: 345 }} className='mr-8'>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
    
    <div>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
    </div>

    <div className='flex mb-8'>
    <div>
    <Card sx={{ maxWidth: 345 }} className='mr-8'>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
    
    <div>
    <Card sx={{ maxWidth: 345 }} className='mr-8'>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
    
    <div>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
       >
        <Image src = {HOUSE5} alt='' />
       </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/singleitem"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
    </div>
  
    </div>

    
    */}

    
  </div>   
    </div>
  )
}



export default CardCat
