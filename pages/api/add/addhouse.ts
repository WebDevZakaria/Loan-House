
import { NextApiRequest,NextApiResponse } from "next";

import validator from "validator";
import { PrismaClient } from "@prisma/client";

import bcrypt from "bcrypt" 

import * as jose from "jose"
import { setCookie } from "cookies-next";

const prisma = new  PrismaClient()

export default async function handler (req:NextApiRequest,res:NextApiResponse){

    if(req.method=="POST"){

        const {name,main_image,description,loaning_price,slug,baladiya}  = req.body 
        
        const errors:string[] = []

        const validationSchema = [
            
            {

                valid:validator.isLength(name,{
                    min:1,
                    max:20,
                }),
                errorMessage:"First name is Invalid"

            },
            
            {

                valid:validator.isLength(description,{
                    min:1
                 
                }),
                errorMessage:"Last name is Invalid"

            },
            
            {

                valid:validator.isSlug(slug),
                errorMessage:"slug is Invalid"

            },
            
            

        ]

        validationSchema.forEach((check) => {

            if(!check.valid){

                errors.push(check.errorMessage)

            }

        })

        if(errors.length)
        {

            return res.status(400).json({errorMessage:errors[0]})

        }

        // const userWithEmail = await prisma.user.findUnique({

        //     where: {
        //         email,
        //     },
        
        // })
        

        // if(userWithEmail)
        // {

        //     return res.status(400).json({errorMessage:"Email Already Exist"})

        // }

        //const hashedPassword = await bcrypt.hash(password,10)

      const add = await prisma.houses.create({

        data:{
            name:name,
            description:description,
            main_image:"https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
            slug:slug,
            loaning_price:loaning_price,
            baladiya:baladiya,
            open_time:"8",
            close_time:"23"
        }
      })

     
       
        return res.status(200).json(
            {
                name:add.name,
                description:add.description,
                main_image:add.main_image,
                slug:add.slug,
                loaning_price:add.loaning_price,
                baladiya:add.baladiya_id
        }
        )       
}

return res.status(404).json("Unknown endpoint ")

}
