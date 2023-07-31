import { overview } from "@/data"
import Image from 'next/image';
import HOUSE3 from '../../public/assets/house3.png'

import HOUSE4 from '../../public/assets/room.jpg'


function Cards() {
    const {productImg} = overview
  return (
    <section className='min-h-[400px] py-12 lg:min-h-[512px]  bg-cover bg-left-top pt-[30px] lg:pt-[87px] '>
        <h1 className="text-[70px] text-center mb-8 "> More Then 100 Confortable House  </h1>
    <div className='container mx-auto flex justify-end overflow-hidden '>
        
      <Image src={productImg} alt='' data-aos = 'fade-up' data-aos-offset ='300' className="h-[700px] rounded-2xl" />
      <div className=" absolute top-[1600px]  lg:top-[1000px]">
        <h4 className="text-[40px] text-center text-white lg:text-violet-500 ">Amazing Rooms</h4>
      <Image src = {HOUSE3} className="w-[400px] h-[300px] rounded-2xl mx-10 " alt="" />
      </div>

      <div className=" absolute  lg:top-[1300px]">
        <h4 className="text-[40px] text-center ml-[380px] text-white ">Full Show </h4>
      <Image src = {HOUSE4} className="w-[400px] h-[300px] rounded-2xl mx-[1150px] " alt="" />
      </div>
      

    
    </div>

      

    </section>
  )
}

export default Cards
