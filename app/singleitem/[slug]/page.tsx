
import { notFound } from 'next/navigation';
import NavBar from '../../components/NavBar'
import Indexss from './components/Indexss'
import { PrismaClient,Baladiya } from "@prisma/client"

const prisma = new PrismaClient()


export default interface Houses {

  id:number;
  name:string;
  main_image:string;
  description:string,
  loaning_price:number,
  slug:string,
  baladiya:Baladiya,

}


const fetchHousesById = async(slug:string) =>{
  const house = await prisma.houses.findUnique({
    where:{
      slug
    },
    select:{
      
  name:true,
  main_image:true,
  description:true,
  loaning_price:true,
  slug:true,
  baladiya:true,

    }
  })

  if (!house){
    notFound()
  }
  return house
}

export default async function page({params}:{params:{slug:string}}) {

  const house = await fetchHousesById(params.slug)

  
  return (

    <main>
        
<NavBar />

<Indexss house = {house.name} description = {house.description} loaningprice = {house.loaning_price}  />


    </main>
    
  )
}


