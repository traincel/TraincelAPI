import Category from "../models/category_model";
import {getDb} from "../util/db";

export const getAllCategories = (async () => {
    const db = getDb();
   return  await db.collection('categories').find().toArray();
});

export const addCategory = (async (category:Category) => {
    const db= getDb();
   return db.collection('categories').insertOne(category);
})