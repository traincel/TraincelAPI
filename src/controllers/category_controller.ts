import { Request, Response } from "express";
import * as CategoryService from '../services/category_service';
export const getCategories = (async (req: Request, res: Response) => {
try {
   const categories = await CategoryService.getAllCategory();

   res.status(200).send(categories);
} catch(e){
    res.status(500).send(e.message);
}
});

export const addCategory = (async (req: any, res: Response) => {
    try{
        console.log(req.body)
    var response =  await CategoryService.addCategory(req.body);
        res.status(201).send(response);
    }catch(e){
        res.status(500).send(e.message);
    }
});