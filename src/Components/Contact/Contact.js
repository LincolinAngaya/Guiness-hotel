import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import ContactFrom from "./ContactFrom"
import { useHistory } from 'react-router-dom';

const Contact = () => {

  const history = useHistory();

  function addMovieHandler(contactDetails){
    fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json',
    {
     method:'POST',
     body:JSON.stringify(contactDetails),
     headers:{
            'Content-Type':'application/json'
     }
    }
    ).then(() => {
      history.replace('/');
    });
}
  return (
    <>
      <HeadTitle />
      <ContactFrom onAddContact={addMovieHandler}/>
    </>
  )
}

export default Contact
