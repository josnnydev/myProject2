import { Request, Response } from "express";
import path from 'path'
import {pool} from "../database/database";

class Getindex{
    public index (req: Request,res:Response){
        res.render(path.join('partials', 'index'))
    }

    public  form (req:Request,res:Response){
        
        res.render(path.join('form', 'forms'),{title: 'hiii'})

    }

    public  getCreate = async (req: Request, res: Response): Promise<Response>=>{
        try{
            const {name,lastname,email,password}= req.body;
            const response = await pool.query('INSERT INTO users (name,lastname,email,password) VALUES ($1,$2,$3,$4)', [name,lastname,email,password])
   
            return res.json('Data Received')
        }catch(e){
            return res.status(500).json({message: e}) 
        }
           
    }

} 



export const getindex = new Getindex()

  

