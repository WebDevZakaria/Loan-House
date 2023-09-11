
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Select } from "./Select"

import AlertSide from "./AlertSide"
import CardCat from "./CardCat"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PrismaClient,Baladiya } from "@prisma/client"

const prisma = new PrismaClient()

export interface ItemCardType{

  id:number;
  name:string;
  main_image:string;
  description:string,
  loaning_price:number,
  slug:string,
  baladiya:Baladiya,
}



const fetchHouse = async ():Promise<ItemCardType[]> =>{

  const houses = await prisma.houses.findMany({
  
  select : {

    id:true,
    name:true,
    main_image:true,
    description:true,
    baladiya:true,
    loaning_price:true,
    slug:true,
    

   

  }}
  )

  return houses
  
}




export default async function Searchbar() {
  const houses = await fetchHouse() 

  return (
    <section className="min-h-[1800px] lg:min-h-[1600px] ">
      <div className="  lg:flex">
        <div>
  <Card className="w-[450px] mt-40 mx-8  h-[300px] lg:h-[900px]">
      <CardHeader> 
        <CardTitle className="text-center">Select  wilaya</CardTitle>
        <CardDescription className="text-center">Select the Wilaya and Choose the house you need</CardDescription>
      </CardHeader>
      <div>
        <Select />
      </div>
      <div>
        <AlertSide />
      </div>
    </Card>
    </div>
    <div className="relative top-[700px] lg:top-[170px] ml-20  mb-8 p-3 grid grid-cols-3 gap-3 " >
    {houses.map((house)=>(
          <CardCat house = {house} key={house.id} />
        ))}
       
     

    </div>

    </div>

    <div className="relative top-[200px] ml-[950px]">
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
    </div> 
    </section>
  )
}

