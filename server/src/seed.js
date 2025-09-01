import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Testimonial from './models/Testimonial.js';
import { projects, testimonials } from './seedData.js';


dotenv.config();


const run = async () => {
await mongoose.connect(process.env.MONGODB_URI);
await Project.deleteMany({});
await Testimonial.deleteMany({});
await Project.insertMany(projects);
await Testimonial.insertMany(testimonials);
console.log('Seeded!');
process.exit(0);
};


run();