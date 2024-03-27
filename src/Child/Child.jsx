 


 import { useGlobalContext } from "../Contextapi/Components/Context"

const Child = () => {

    const {Setuser , Setshow } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
            Setshow(true)
       
    }



    const handleChange = (e) => {
       

        const {name , value } = e.target
        Setshow(false)
            Setuser((prev)=> ({
                ...prev,
                [name] : value
            }))
            
           

    }

  return (
    <div> 
 
     <form onSubmit={handleSubmit}>
        <input type='text' name='username' onChange={handleChange} />
        <input type='email' name='email' onChange={handleChange} />
        <input type='text' name='contact' onChange={handleChange} />
        <button type='submit' >SUBMIT</button>
      </form>
    
    </div>
     
  )
}

export default Child