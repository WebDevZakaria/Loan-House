

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
//import { UilFeedback } from '@iconscout/react-unicons'
function Submitted() {
  return (
    <section>
        <div className="  mx-[80px] lg:mx-[530px] my-[40px] lg:my-[100px]">
<Card className="w-[650px]">
      <CardHeader>
        
      </CardHeader>
      <CardContent>
        
          <div className="grid w-full items-center gap-4">
            YOur Request Have Been Submitted , Keep Your Phone On and Keep Eye ON Your email You will be contacted Soon.
       
           
           <div className="mx-[240px]">   </div>
          </div>

          <div className="grid w-full items-center gap-4 mt-8">
          <CardTitle>Shipping Adress Information </CardTitle>
            first_name:Zakaria<br />
            last_name:Bouregbi<br />
            Email: Zedk@gmail.com<br />
            Phone Number:Zakaria<br />
            Your Location:Guelma      <br />    


          </div>
          <div className="grid w-full items-center gap-4 mt-8">
            
          <CardTitle>House Information </CardTitle>
            House_Name:xdvdvdvd<br />
            Description:svavadvlavnalvak<br />
            Location: Algeria<br />
            Owner:Zakaria<br />
            Owner_phone_Number:054443433434124<br />

          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Link href = "/" className="ml-[220px] mt-8 mb-8 w-[300px]"><Button>Back Home</Button></Link>
      </CardFooter>
    </Card>

    </div>

      
    </section>
  )
}

export default Submitted
