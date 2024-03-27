import React, { useState } from 'react'

const Fetch = () => {

    const [show , setshow] = useState([]);

    const fetchtodo = async ()=>{



     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/100') ;
        console.log(response)
        const data = await response.json();
        console.log(data)
        setshow([data])
     
     }
    
     
     catch (error) {
        console.log("error --> " , error)
     }
       


    }
  return (
    <div>
       
  <button onClick={ fetchtodo}>Fetch </button>
  <ul>
                {show.map((el, i) => (
                    <li key={i}>{el.title}</li> // Assuming each item has a "title" property
                ))}
            </ul>
      
    </div>
  )
}

export default Fetch