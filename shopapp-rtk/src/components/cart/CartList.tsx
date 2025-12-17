import React from 'react'

// import CartRow from './CartRow';
import { Button } from 'react-bootstrap';

export default function CartList() {


  return (
    <div className='container'>
        
        <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
           <div className='col-md-4'>
             Total : {0}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
           <div className='col-md-4'>
             <Button variant='success' >Checkout</Button>
          </div>
        </div>
    </div>
  )
}
