import { Button } from "@/components/ui/button"

import HOUSE1 from '../../public/assets/house1.svg'

import Image from 'next/image';



function Homes() {
  return (
    <section className=" min-h[400px] lg:h-[700px] relative top-[2px]">

        <div className="flex flex-col lg:flex-row ">
          <div className="mt-52 mx-[250px]">

            <h1 className="text-[60px] font-bold">Loan  House </h1>
            <p className="mb-8"> Search for the wilaya you want and Find The best house To Live in
            </p>
            <div className="  lg:space-x-10">
            <Button className="mb-8">Register Now </Button>
            <Button className="bg-yellow-300 w-[180px]" >Search For House</Button>
            </div>
          </div>
          <div className="mx-[200px] w-[200px] mt-[10px] lg:w-[600px] lg:my-[170px] ">

            <Image src={HOUSE1} alt = "" />

          </div>
        </div>
          



    </section>
  )
}

export default Homes
