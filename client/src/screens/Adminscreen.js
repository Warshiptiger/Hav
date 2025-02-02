import React ,{useState,useEffect}from "react";
import { Tabs } from "antd";
import axios from "axios";
const {Tabpane}=Tabs;

function Adminscreen() {
  return (
    <div className='mt-3 ml-3 mr-3 bs'>
        <h2 className='text-center' style={{fontSize:'30px'}}> <b>Admin panel</b></h2>
        <Tabs defaultActivitykey="1">
            <Tabpane tab="Bookings" key="1">
                <Bookings/>
            </Tabpane>
            <Tabpane tab="Rooms" key="2">
                <h1>Rooms</h1>
            </Tabpane>
            <Tabpane tab="Add Rooms" key="3">
                <h1>Add Rooms</h1>
            </Tabpane>
            <Tabpane tab="Users" key="4">
                <h1>Users</h1>
            </Tabpane>
        </Tabs>
    </div>
  )
}

export default Adminscreen


export function Bookings(){
    const[bookings, setbookings] = useState([])
    const[loading, setloading] =  useState(true)
    useEffect(async() => {
       try {
         const data = await axios.post("/api/bookings/getallbookings").data;
         setbookings(data)
         setloading(False)
       } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)
       }
    }, [])

    return(
        <div className='row'>

            <div className='col-md-10'>
                <h1>Bookings</h1>
            </div>
        </div>
    )
}