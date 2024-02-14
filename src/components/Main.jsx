import React from 'react'
import Hannah from '/images/Hannah.jpg'
import Product from '/images/Product.jpg'
import Logo from '/images/Logo.jpg'

const Main = () => {
  return (
    <div>
        <div className='flex flex-col-reverse items-center'>
          <img className='max-w-[300px]' src={Hannah} alt="" />
          <img className='max-w-[300px]' src={Logo} alt="" />
        </div>

        <div className='flex items-center'>
            <img className='block mx-auto max-w-[300px]' src={Product} alt="" />
        </div>
        
        <div className='flex flex-col
         items-center'>
          <h5 className='text-white text-sm'>Allergen friendly options are available.</h5>
          <h5 className='text-white text-sm'>Prices will vary for special requests.</h5>
          <h5 className='text-white text-sm'>Delivery fees not included and vary on distance.</h5>
      </div>
    </div>
  )
}

export default Main