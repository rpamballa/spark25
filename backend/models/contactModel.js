import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  details: { type: String, required: true},
  createdAt: { type: Date, default: Date.now},
})

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;