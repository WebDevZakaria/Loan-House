
import HOUSE from '../../../public/assets/house3.png'
import Image from 'next/image'
import Imagelist from './Imagelist'
import Ingradiants from './Ingradiants'
import Reviews from './Reviews'
function CardItem() {
  return (
    <div>
        <div className='h-full w-full mb-8'>
        <Image src={HOUSE} alt='' />
        </div>

        <div>
            <h1 className='text-center text-[60px]'>Guelma House,Nouvelle ville</h1>
            <p className='text-center mb-8 '>Guelma House,Nouvelle ville </p>
            <div className='flex flex-col lg:flex-row space-y-10'>

            <Imagelist />    
            <Ingradiants />
            </div>

           

        </div>

        <Reviews />



    </div>
  )
}

export default CardItem