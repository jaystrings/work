import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CgShoppingCart } from "react-icons/cg"
import { Twirl as Hamburger } from 'hamburger-react'
import Navlocker from './Navlocker';


export default function Navhead() {

    const [isOpen, setOpen] = useState(false)
  return (
   <>
   {/* Here we style our Nvabar */}
   <div className='position-fixed top-0 w-100' style={{zIndex:'10'}}>

    <Container className='d-flex align-items-center justify-content-between p-2'>

        <div className='d-flex align-items-center gap-3 gap-md-5'style={{zIndex:'10'}}>

        <Hamburger toggled={isOpen} toggle={setOpen} />
        <NavLink className='fs-1 text-blue align-self-center 'to='/'>

          Shop
        </NavLink>
        </div>
       
       
        <div className= "d-flex justify-content-center align-items-center gap-5">

          <NavLink className='text-blue text-decoreation-none fs-2' to='/search'>Search </NavLink>

          <div className="d-flex gap-3">
            <NavLink className='text-secondary'>Login</NavLink>
            <NavLink to='/cart'>
              <CgShoppingCart  size= '1.5rem'/>
            </NavLink>
          </div>

        </div>
    </Container>
   {isOpen && <Navlocker isOpen={isOpen} setOpen={setOpen} />}


   </div>
   
   
   </>
  )
}
