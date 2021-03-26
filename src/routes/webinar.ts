import express from 'express';

const router = express.Router();

router.get('/getWebinars', (req, res, next) => {
console.log('in webinars')
});

router.post('/addWebinar', (req, res, next) => {

});

router.get('/getWebinar/:webinarId', (req, res, next) => {

});

router.patch('/updateWebinar/:webinarId', (req, res, next) => {

});

router.delete('/deleteWebinar/:webinarId', (req, res, next) => {

});

export default router;