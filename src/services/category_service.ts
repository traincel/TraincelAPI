import { v4 as uuidv4 } from 'uuid';

import * as CategoryDB from '../database/category_db';
import Category from '../models/category_model';

export const getAllCategory = (async () => {
    return await CategoryDB.getAllCategories();
});

export const addCategory = (async (reqBody: any) => {
    console.log(reqBody);
    if(!reqBody) {
        return 'Invalid Input';
    }

    let category = new Category(reqBody);
    console.log(category);
    return await CategoryDB.addCategory(category);
})