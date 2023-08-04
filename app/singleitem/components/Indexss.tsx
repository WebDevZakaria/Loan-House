

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CardItem from "./CardItem"
import ControlledOpenSelect from "./ControlledOpenSelect"

import Link from "next/link";


function Indexss() {
  return (
    <section className="min-h-[1800px] lg:min-h-[1600px] ">
      <div className="lg:flex">

      <div className="relative top-[100px] lg:top-[170px] ml-20 " >

      <CardItem />

    </div>

        <div>
  <Card className="w-[350px] mt-40 ml-[100px]  lg:mx-8  h-[270px] lg:h-[350px] lg:fixed">
      <CardHeader> 
        <CardTitle className="text-center">Order Now</CardTitle>
        <CardDescription className="text-center">Select How Many Months You Wnat To load</CardDescription>
        <ControlledOpenSelect />

        <Stack direction="row" spacing={2} className="ml-[100px]">
          
       <Link href = '/shiping'> <Button variant="contained" color="success">
        Order Now
      </Button>
      </Link>
      

      
    </Stack>

      </CardHeader>
    
    </Card>
    </div>
   

    </div>
 
    </section>
  )
}

export default Indexss