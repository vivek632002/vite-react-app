import axios from "axios"
import { useEffect, useState } from "react"




const withProfile =(Component)=>{

    return ()=>{

        const[profileData,setProfileData]=useState({})

        useEffect(()=>{
            fetchData()
        },[])

        const fetchData=async()=>{
            const {data,status}=await axios.get("https://dummyjson.com/users/1")
            if(status===200){
                setProfileData(data)

            }
       
        }

        return <Component  profile={profileData}  />
    }
}

export default withProfile