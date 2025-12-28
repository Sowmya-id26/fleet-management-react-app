import { useState } from "react"
function Admin(){
    const [vehicle, setVehical]=useState([])
    const [Drivername, setDrivername]=useState([])
    const handleVehicle=()=>{
        setVehical(oldlist)=[...oldlist,vehicle]
    }
    const handelDriverName=()=>[
        (vechileid,newDriver)=>{
            setVehical(oldlist)=
                oldlist.map(items)=iteam.id===vechileid ? available:! iteam.available : item
        }
    ]
    const handelAvailabilityToggle=(vechileid)=>{
        setVehical(oldlist)=oldlist.map(item)={if (item.id===vechileid){
            return{...item, available:! itam.avalible}

        }
        return iteam;
    } 


        }
    
    const handleDeleteVehicle=()=>{
        (vehicleid)=>{
            const confirms=confirm("Do You Wannt To Delete");
            if(confirm){
                setVehical((oldlist)=>
                oldlist.filter((item)) = item.id!==vechileid)


            }
        }
    }    


    
    
    return(
        <>
           <sidebar onAdd={handleVehicle}/>
           updateDriver={handelDriverName}
           updateToggle={ handelAvailabilityToggle}
           updateDeletedVechile={handleDeleteVehicle}

        <h3>Fleet Card</h3>
    
        </>
    )

}
export default Admin