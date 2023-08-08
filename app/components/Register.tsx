
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

  import { UilGithub } from '@iconscout/react-unicons'
  import { UilGoogle } from '@iconscout/react-unicons'
  export function Register() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Btnn variant="outline">Register</Btnn>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create New Account</CardTitle>
        <CardDescription>
          Fill The Inputs below to Create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
          <UilGithub className="mr-2 h-4 w-4"/>
            Github
          </Button>
          <Button variant="outline">
           <UilGoogle className="mr-2 h-4 w-4" />
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
          <Label htmlFor="name">Fist Name</Label>
          <Input id="first_name" type="name" placeholder="Enter Your First_name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Last Name</Label>
          <Input id="last_name" type="name" placeholder="Enter Your last_name" />
        </div>
        
          <div className="grid gap-2">
          <Label htmlFor="name">City</Label>
          <Input id="city" type="name" placeholder="Enter Your City" />
        </div>
          <div className="grid gap-2">
          <Label htmlFor="name">Phone Number</Label>
          <Input id="phone" type="name" placeholder="Enter Your Phone" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      
    </Card>
    <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Register</AlertDialogAction>
        </AlertDialogFooter>


        </AlertDialogContent>

      </AlertDialog>
    )
  }