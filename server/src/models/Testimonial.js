import mongoose from 'mongoose';


const TestimonialSchema = new mongoose.Schema({
name: String,
company: String,
quote: String,
avatarUrl: String,
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Testimonial', TestimonialSchema);