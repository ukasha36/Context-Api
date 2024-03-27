import React from 'react'
import { useGlobalContext } from '../Contextapi/Components/Context'

const Showuser = () => {

    const {user , show} = useGlobalContext();

    if(!show)  return  <p>Enter Data ..</p>
    
  return (
    <div>


    
   <p>{JSON.stringify(user)}</p>




    </div>
  )
}

export default Showuser