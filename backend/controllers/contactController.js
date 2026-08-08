import Contact from "../models/contactModel";

export const saveContactFrom = async (req, res, next) => {
  const { name, email, details } = req.body;

  if(!name || !email || !details) {
    return res.status(400).json({ message: "All fields are required"})
  }

  try {
    const newContact = new Contact({ name, email, details})
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully"})
  }catch (err) {
    next(err)
  }
}