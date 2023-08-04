
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import Stack from '@mui/material/Stack';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import CreateSvgIcon from "./CreateSvgIcon"

import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilUserCircle } from '@iconscout/react-unicons'

function Navship() {

  return (

    <section className="h-[400px] lg:h-[700px]">
      <div className="flex flex-col lg:flex-row">
<div className="  mx-[80px] lg:mx-[300px] my-[40px] lg:my-[100px]">
<Card className="w-[650px]">
      <CardHeader>
        <CardTitle>Shipping Adress </CardTitle>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Last_Name</Label>
              <Input id="name" placeholder="Enter Your Last_Name " />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">First_Name</Label>
              <Input id="name" placeholder="Enter Your First_Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">UserName</Label>
              <Input id="name" placeholder="Enter Your UserName" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="Enter Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">phone Number</Label>
              <Input id="number" placeholder="Enter Your PHone Numbers " />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Your Loaction</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>

    </div>

    <div className="w-[350px] mt-30 ml-[100px] lg:mt-24 h-[270px] lg:h-[850px]">
  <Card>
      <CardHeader> 

        <CardTitle className="text-center">House Information</CardTitle>
        <CardDescription className="text-center">Confortable House</CardDescription>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

    <ListItem>
      
      <ListItemAvatar>
        <Avatar>
          <UilLocationPoint />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Guelma" secondary="Nouvelle ville" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CreateSvgIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="House" secondary="F3" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <UilUserCircle />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Zakaria Bour" secondary="Guelma" />
    </ListItem>
  </List>

        <Stack direction="row" spacing={2} className="ml-[100px]">
          
      <Button>
        Order
      </Button>
      </Stack>
      
      </CardHeader>
    
    </Card>
    </div>
    

    </div>


    </section>
  )

}

export default Navship
