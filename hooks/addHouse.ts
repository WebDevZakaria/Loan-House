import axios from "axios"
import { useContext, useState } from "react";
import { AuthenticationssContext } from "../app/context/AuthContext";
import { getCookie,deleteCookie } from "cookies-next";



const addHouse = () =>{

   // const {setAuthState} = useContext(AuthenticationssContext)
    const [newHouse,setNewHouse] =useState({})

   

    const addnewhouse = async (
             {
        name,
        main_image,
        description,
        loaning_price,
        slug,
        baladiya,

    }:{
        name:string;
        main_image:string;
        description:string;
        loaning_price:number;
        slug:string;
        baladiya:string; 
 }
    ) =>{


        setNewHouse({
            data:null,
            error:null,
            loading:true
        })  

        try{

           const response = await axios.post("http://localhost:3000/api/add/addhouse",{
            name,
            main_image,
            description,
            loaning_price,
            slug,
            baladiya,
            })
            setNewHouse({
                data:response.data,
                error:null,
                loading:false
    
            })
            console.log(response)
        }
        catch(error:any){
            console.log(error)
            
            setNewHouse({

                data:null,
                error:error.response.data.errorMessage,
                loading:false

            })
            
        }
    }

 

    return {
        addnewhouse
    }

}



export default addHouse