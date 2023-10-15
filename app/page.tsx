import NavBar from "./components/NavBar"
import Homes from "./components/Homes"
import Cards from "./components/Cards"
import Items from "./components/Items"
import Review from "./components/Review"
import { PrismaClient,Baladiya } from "@prisma/client"
import { Button as Button1 } from "@/components/ui/button"

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



export  default async function Home() {
  const houses = await fetchHouse() 

  return (
    
    <main>

      <NavBar />
      <Homes />
      <Cards />
      <div className="flex flex-col lg:flex-row space-x-2 mx-[340px]">

        {houses.map((house)=>(
          <Items house = {house} key={house.id} />
        ))}
       
            
         </div>

      <Review />

    
    </main>

  )
}
