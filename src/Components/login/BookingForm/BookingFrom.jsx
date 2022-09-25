
import Booking from './Booking'
import React from "react"
import HeadTitle from '../../../Common/HeadTitle/HeadTitle';
import { useHistory } from 'react-router-dom';

function BookingFrom() {

  const history = useHistory();

  function addBookingHandler(bookingDetails){
    fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json',
    {
     method:'POST',
     body:JSON.stringify(bookingDetails),
     headers:{
            'Content-Type':'application/json'
     }
    }
    ).then(() => {
      history.replace('/sign-in');
    });
}
  return (
    <>
      <HeadTitle />
      <Booking  onAddBooking={addBookingHandler}/>
     
    </>
  )
}

export default BookingFrom
