"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button as Btnn } from "@/components/ui/button"
  
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

  //import { UilGithub } from '@iconscout/react-unicons'
  //import { UilGoogle } from '@iconscout/react-unicons'

  import useAuth from "@/hooks/useAuth"
  import { AuthenticationssContext } from "../context/AuthContext"
  import { useState,useEffect ,useContext} from "react"
  import { Alert, CircularProgress } from '@mui/material';

  export default function Login() {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  
      const { signin ,signout} = useAuth()
      const { loading, data , error } = useContext(AuthenticationssContext)
  
      const renderContent = (signinContent:string) => {
  
        return signinContent
        
      }
    
  
      const handleChangeIput = (e: React.ChangeEvent<HTMLInputElement>) =>{
  
    setInputs(
      {
        ...inputs,
        [e.target.name]:e.target.value
      }
    )
  
  }
  
  const [inputs,setInputs] = useState ({

    email:"",
   
    password:""
  
  })
  
  
  
  
  
  
  const HandleClick = () =>{
  
    signin(inputs, handleClose)

    
  
  }
  


    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {data ? <Button onClick={signout} variant="outline">Logout</Button>:  <Btnn variant="outline">Login</Btnn>}
        </AlertDialogTrigger>
        <AlertDialogContent>
        <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login To Your account</CardTitle>
        <CardDescription>
          Enter your email and Password below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
          
            Github
          </Button>
          <Button variant="outline">
           
            Google
          </Button>
        </div>


        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" value ={inputs.email} onChange={handleChangeIput} name="email" />
        </div>

        <div className="grid gap-2">

          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value ={inputs.password} onChange={handleChangeIput} name="password" />

        </div>

      </CardContent>

    </Card>
    <AlertDialogFooter>

          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <button onClick={HandleClick}><AlertDialogAction>Login</AlertDialogAction></button>

        </AlertDialogFooter>


        </AlertDialogContent>

      </AlertDialog>
    )
  }
  