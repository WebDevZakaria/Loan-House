
import {  PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main (){
  await prisma.wilaya.create({
    data:
    {
      name:"constantine",
    },

  })
 
  

}


main().catch(e =>{
  console.log(e)
  process.exit(1)
}).finally(async()=>{

  await prisma.$disconnect()

})