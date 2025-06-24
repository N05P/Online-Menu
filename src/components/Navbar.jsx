import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CarTaxiFront, HeartPlus } from 'lucide-react';
import Store from '../utils/redux/Store';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const Cart = useSelector((Store)=>Store.additems)
    const [isOpen,setOpen] = useState(false);
    

  return (
    <nav className='w-full px-20 py-5 flex items-center justify-between '>
        <h2 className='text-2xl cursor-pointer'>NØTHĨNG</h2>
        <div className='w-8 h-8 cursor-pointer sm:hidden flex' onClick={()=>setOpen(!isOpen)}>
            <img src={!isOpen?"/src/assets/menu.svg":"/src/assets/close.svg"} alt="" />
        </div>
        <div className=' sm:flex hidden '>
                <ul className='flex gap-5 '>
                    <Link to="/"><li className='cursor-pointer'>Home</li></Link>
                    <Link to='/menu'><li className='cursor-pointer'>Menu</li></Link>
                    <Link to='/contact' ><li className='cursor-pointer'>Contact</li></Link>
                </ul>
        </div>
        <Link to={'/cart'}>
        <div className='flex relative cursor-pointer'>
         <HeartPlus className='text-grey-400'></HeartPlus>
         <p className='absolute top-0 left-8
         '>{Cart.length}</p>
        </div></Link>
        <div className=' absolute top-20 left-10  mx-auto overflow-hidden sm:hidden block'>
                <ul className={`cursor-pointer bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out ${isOpen?"max-h-screen":"max-h-0"}`}>
                    <Link to="/" ><li className='cursor-pointer'>Home</li></Link>
                    <Link to="/menu" ><li className='cursor-pointer'>Menu</li></Link>
                    <Link to='/contact' ><li className='cursor-pointer'>Contact</li></Link>
                </ul>
        </div>
    </nav>
  )
}

export default Navbar