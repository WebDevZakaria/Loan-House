
import { NextApiRequest,NextApiResponse } from "next";

import validator from "validator";
import { PrismaClient } from "@prisma/client";

import bcrypt from "bcrypt" 

import * as jose from "jose"
import { setCookie } from "cookies-next";

const prisma = new  PrismaClient()

export default async function handler (req:NextApiRequest,res:NextApiResponse){

    if(req.method=="POST"){

        const {first_name,last_name,email,phone,city,password}  = req.body 

        const errors:string[] = []

        const validationSchema = [
            
            {

                valid:validator.isLength(first_name,{
                    min:1,
                    max:20,
                }),
                errorMessage:"First name is Invalid"

            },
            
            {

                valid:validator.isLength(last_name,{
                    min:1,
                    max:20,
                }),
                errorMessage:"Last name is Invalid"

            },
            
            {

                valid:validator.isEmail(email),
                errorMessage:"Email is Invalid"

            },
            
            

            {

                valid:validator.isMobilePhone(phone),
                errorMessage:"phone is Invalid"

            },
            
            {

                valid:validator.isLength(city,{
                    min:1,
                  
                }),
                errorMessage:"city is Invalid"

            },
            
            {

                valid:validator.isStrongPassword(password),
                errorMessage:"passowrd is not Strong enough,use Strong Letter"

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

        const userWithEmail = await prisma.user.findUnique({

            where: {
                email,
            },
        
        })
        

        if(userWithEmail)
        {

            return res.status(400).json({errorMessage:"Email Already Exist"})

        }

        const hashedPassword = await bcrypt.hash(password,10)

      const user = await prisma.user.create({

        data:{
            first_name:first_name,
            last_name:last_name,
            password:hashedPassword,
            city,
            phone,
            email
        }
      })

      const alg = "HS256"
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)

      const token = await new jose.SignJWT({email:user.email}).setProtectedHeader({alg}).setExpirationTime("24h").sign(secret)

      setCookie("jwt",token,{req,res,maxAge:60 * 6 * 24}) 
       
        return res.status(200).json(
            {
                first_name:user.first_name,
                last_name:user.last_name,
                email:user.email,
                city:user.city,
                phone:user.phone
        }
        )       
}

return res.status(404).json("Unknown endpoint ")

}
