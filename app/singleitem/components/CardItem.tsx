
import HOUSE from '../../../public/assets/house3.png'
import Image from 'next/image'

function CardItem() {
  return (
    <div>
        <div className='h-full w-full mb-8'>
        <Image src={HOUSE} alt='' />
        </div>

        <div >
            <h1 className='text-center text-[60px]'>Guelma House,Nouvelle ville</h1>
            <p className='text-center '>Guelma House,Nouvelle ville </p>

        </div>

    </div>
  )
}

export default CardItem