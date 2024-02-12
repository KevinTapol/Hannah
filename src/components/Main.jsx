import React from 'react'
import Hannah from '/images/Hannah.jpg'
import Product from '/images/Product.jpg'
import Logo from '/images/Logo.jpg'

const Main = () => {
  return (
    <div>
        <div className='flex justify-around'>
          <img className='max-w-[200px]' src={Hannah} alt="" />
          <img className='max-w-[200px]' src={Logo} alt="" />
        </div>

        <img className='block mx-auto max-2-[100px]' src={Product} alt="" />
        
        <div className='flex flex-col items-center'>
          <h5 className='text-white text-sm'>Allergen friendly options are available.</h5>
          <h5 className='text-white text-sm'>Prices will vary for special requests.</h5>
          <h5 className='text-white text-sm'>Delivery fees not included and vary on distance.</h5>
      </div>
    </div>
  )
}

export default Main