import React , {useState , useEffect} from 'react'
import axios from "axios";

function Homeescreen() {

const[rooms , setrooms] = useState([])
  useEffect(async() => {

    try {
      const data = (await axios.get('/api/rooms/getallrooms')).data

      setrooms(data)

    }  catch(error) {
         console.log(error) 
    }

  }, [])


  return (
    <div>
      <h1>Homescreen</h1>
      <h1>there are total {rooms.length} rooms</h1>
    </div>
  )
}

export default Homeescreen
