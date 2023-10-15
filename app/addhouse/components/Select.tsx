import React from 'react'
import { PrismaClient } from '@prisma/client'
import { Label } from "@/components/ui/label"

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
   Select as Selectv
  } from "@/components/ui/select"

const prisma = new PrismaClient()

const fetchBaladiya = async () => {
    
  const baladiyat = await prisma.baladiya.findMany({
  
  select : {

    id:true,
    name:true
   
  }}

  )

  return baladiyat
  
}


export default async function Select() {

const baladiyat = await fetchBaladiya() 



return (

  
<div className="flex flex-col space-y-1.5">

            <Label htmlFor="framework">The Baladiya</Label>
            <Selectv>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select"/>
              </SelectTrigger>
              <SelectContent position="popper">

                {baladiyat.map((baladiya) =>(
                <SelectItem key={baladiya.name}  value ={baladiya.name}>{baladiya.name}</SelectItem>
                ))}
                
              </SelectContent>
            </Selectv>

          </div>

  )

}



