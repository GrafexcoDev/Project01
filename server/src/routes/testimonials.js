import { Router } from 'express';
import Testimonial from '../models/Testimonial.js';


const router = Router();


router.get('/', async (_req, res) => {
const items = await Testimonial.find().sort({ createdAt: -1 });
res.json(items);
});


export default router;