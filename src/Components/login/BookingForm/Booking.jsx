import React from 'react'
 import  '../../HomeSection/Home.css'

function Booking() {
  return (
    <>
    <section className='slide-form'>
    <div className='container'>
      <h2>Enjoy Your Holiday</h2>
      <span> Search and Book Hotel</span>

      <form>
        <input type='text' placeholder='Seacrh City' />
        <div className='flex_space'>
          <input type='date' placeholder='Check In' />
          <input type='date' placeholder='Check Out' />
        </div>
        <div className='flex_space'>
          <input type='number' placeholder='Adult(s)(18+)' />
          <input type='number' placeholder='Children(0- 17)' />
        

        </div>
        <div className='flex_space'>
        <input type='number' placeholder='Rooms' />
        <input type='Submit' value='Submit' className='submit' />
        </div>
       
      </form>
    </div>
  </section>
  </>
    
  )
}

export default Booking