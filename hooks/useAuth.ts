import axios from "axios"
import { useContext } from "react";
import { AuthenticationssContext } from "../app/context/AuthContext";
import { getCookie,deleteCookie } from "cookies-next";



const useAuth = () =>{

    const {setAuthState} = useContext(AuthenticationssContext)
    
    const signin = async (

        {
        email,password}:{
            email:string;password:string
        },handleClose:() =>void

        ) =>{
           setAuthState({
            data:null,
            error:null,
            loading:true
        })  

        try{

           const response = await axios.post("http://localhost:3000/api/auth/signin",{
                email,password
            })
            setAuthState({
                data:response.data,
                error:null,
                loading:false
    
            })
            handleClose()
            console.log(response)
        }
        catch(error:any){
            console.log(error)
            
            setAuthState({

                data:null,
                error:error.response.data.errorMessage,
                loading:false

            })
            
        }


    }

    const signup = async (
        
             {
        email,
        password,
        first_name,
        last_name,
        city,
        phone,

    }:{
            email:string;
            password:string;
            first_name:string;
            last_name:string;
            city:string;
            phone:string; 

        },handleClose:() =>void
    ) =>{


        setAuthState({
            data:null,
            error:null,
            loading:true
        })  

        try{

           const response = await axios.post("http://localhost:3000/api/auth/signup",{
                email,
                password ,
                first_name,
                last_name,
                city,
                phone
            })
            setAuthState({
                data:response.data,
                error:null,
                loading:false
    
            })
            handleClose()
            console.log(response)
        }
        catch(error:any){
            console.log(error)
            
            setAuthState({

                data:null,
                error:error.response.data.errorMessage,
                loading:false

            })
            
        }
    }

   const signout = () =>{
    deleteCookie("jwt")
    setAuthState({

        data:null,
        error:null,
        loading:false

    })
   }

    return {
        signin,
        signup,
        signout
        

    }

}



export default useAuth