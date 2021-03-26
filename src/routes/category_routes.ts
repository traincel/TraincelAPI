import express  from 'express';

import * as categoryController from '../controllers/category_controller';


const router = express.Router();

router.route('/api/v2/getCategories').get(categoryController.getCategories);

router.route('/api/v2/addCategory').post(categoryController.addCategory);

export default router;