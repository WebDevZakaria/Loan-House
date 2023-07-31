

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


import CardItem from "./CardItem"



function Indexss() {
  return (
    <section className="min-h-[1800px] lg:min-h-[1600px] ">
      <div className="lg:flex">

      <div className="relative top-[700px] lg:top-[170px] ml-20 " >

      <CardItem />

    </div>

        <div>
  <Card className="w-[450px] mt-40 mx-8  h-[300px] lg:h-[900px]">
      <CardHeader> 
        <CardTitle className="text-center">Select  wilaya</CardTitle>
        <CardDescription className="text-center">Select the Wilaya and Choose the house you need</CardDescription>
      </CardHeader>
    
    </Card>
    </div>
   

    </div>
 
    </section>
  )
}

export default Indexss