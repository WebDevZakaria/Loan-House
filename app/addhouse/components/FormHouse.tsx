"use client"

import React ,{useState} from 'react'

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
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
//import CreateSvgIcon from "./CreateSvgIcon"

//import { UilLocationPoint } from '@iconscout/react-unicons'
//import { UilUserCircle } from '@iconscout/react-unicons'

import Link from "next/link"

//import { PrismaClient } from '@prisma/client'

import addHouse from '@/hooks/addHouse'
import Select from './Select'



export default  function FormHouse() {
  
    const { addnewhouse } = addHouse()

    const renderContent = (addhouseContent:string) => {

      return addhouseContent  

    }

    const handleChangeIput = (e:any) =>{

  setInputs(
    {
      ...inputs,
      [e.target.name]:e.target.value
    }
  )

}

const [inputs,setInputs] = useState ({

  name:"",
  description:"",
  main_image:"",
  loaning_price:1,
  slug:"",
  baladiya:""

})



const HandleClick = () =>{

  addnewhouse(inputs)
  

}

//const baladiyat = await fetchBaladiya() 


  return (

    <section className="h-[400px] lg:h-[700px]">
    <div className="flex flex-col lg:flex-row">
<div className="  mx-[80px] lg:mx-[300px] my-[40px] lg:my-[100px]">
<Card className="w-[650px]">
    <CardHeader>
      <CardTitle>Add House </CardTitle>
      
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">

          <div className="flex flex-col space-y-1.5">

            <Label htmlFor="name">House Name</Label>

            <Input id="name" placeholder="Enter The  House_Name" value ={inputs.name} onChange={handleChangeIput} name="name" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Main Image</Label>
            <Input id="name" placeholder="Enter The Main_Image" value ={inputs.main_image} onChange={handleChangeIput} name="main_image" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Description</Label>
            <Input id="name" placeholder="Enter The Description" value ={inputs.description} onChange={handleChangeIput} name="description" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Loaning Price</Label>
            <Input id="email" placeholder="Enter Your Loaning Price" type='number' value ={inputs.loaning_price} onChange={handleChangeIput} name="loaning_price" />
          </div>
      
      
      
        </div>
      </form>
    </CardContent>

    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button onClick={HandleClick}>Submit</Button>
    </CardFooter>

  </Card>

  </div>

  <div className="w-[350px] mt-30 ml-[100px] lg:mt-24 h-[270px] lg:h-[850px]">

<Card>

    <CardHeader> 

      <CardTitle className="text-center">Your Information</CardTitle>
      <CardDescription className="text-center">Profile Info</CardDescription>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
  <ListItem>

    <ListItemAvatar>
      <Avatar>
        
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Guelma" secondary="Nouvelle ville" />
  </ListItem>
  <ListItem>
    
    <ListItemText primary="House" secondary="F3" />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        
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


