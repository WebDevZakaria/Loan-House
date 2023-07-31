"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Slider from "react-slick";




function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };
  return (
    <section className='min-h-[400px] lg:min-h-[800px]'>
                     
                     <Slider {...settings} className="  relative left-[-30px]">

       
        <div className=" px-8 lg:px-16 text-center">

            <h1 className="text-bold text-[30px] mb-8 lg:text-[50px] mt-20"> Best Reviews For The Website </h1>
            <h1 className="text-blue-300 lg:text-[35px] lg:w-[450px] lg:mx-[600px] lg:my-[80px]
             mb-6 font-medium">&quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;</h1>

        <Avatar className = " w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] mx-[220px] lg:mx-[750px] mb-8">
      <AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn"  />
      <AvatarFallback>CN</AvatarFallback>
       </Avatar>

       <h6 className="text-bold relative  left-[10px]">Zakaria Bouregbi</h6>

        </div>
        
        <div className=" px-8 lg:px-16 text-center">

<h1 className="text-bold text-[30px] mb-8 lg:text-[50px] mt-20"> Best Reviews For The Website </h1>
<h1 className="text-blue-300 lg:text-[35px] lg:w-[450px] lg:mx-[600px] lg:my-[80px]
 mb-6 font-medium">&quot;This is an excellent product, the documentation is excellent and
helped me get things done more efficiently.&quot;</h1>

<Avatar className = " w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] mx-[220px] lg:mx-[750px] mb-8">
<AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn"  />
<AvatarFallback>CN</AvatarFallback>
</Avatar>

<h6 className="text-bold relative  left-[10px]">Zakaria Bouregbi</h6>

</div>

<div className="px-8 lg:px-16 text-center">

<h1 className="text-bold text-[30px] mb-8 lg:text-[50px] mt-20"> Best Reviews For The Website </h1>
<h1 className="text-blue-300 lg:text-[35px] lg:w-[450px] lg:mx-[600px] lg:my-[80px]
 mb-6 font-medium">&quot;This is an excellent product, the documentation is excellent and
helped me get things done more efficiently.&quot;</h1>

<Avatar className = " w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] mx-[270px] lg:mx-[750px] mb-8">
<AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn"  />
<AvatarFallback>CN</AvatarFallback>
</Avatar>

<h6 className="text-bold relative left-[10px]">Zakaria Bouregbi</h6>

</div>
</Slider>

        
    
      
    </section>
  )
}

export default Review
