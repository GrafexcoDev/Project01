import { Router } from 'express';
import Project from '../models/Project.js';


const router = Router();


router.get('/', async (_req, res) => {
const items = await Project.find().sort({ createdAt: -1 });
res.json(items);
});


router.get('/:slug', async (req, res) => {
const item = await Project.findOne({ slug: req.params.slug });
if (!item) return res.status(404).json({ error: 'Not found' });
res.json(item);
});


export default router;