import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true
   },
   slug: {
      type: String,
      require: true,
   },
   description: {
      type: String,
      require: true
   },
   price: {
      type: Number,
      require: true,
   },
   category: {
      type: mongoose.ObjectId,
      ref: 'Category',
      require: true
   },
   quantity: {
      type: Number,
      require: true,
   },
   photo: {
      data: Buffer,
      contentType: String,
   },
   shipping: {
      type: Boolean,
   },
},
   { timestamps: true }
);

export default mongoose.model("Products", productSchema)

//A slug is a human-readable, unique identifier, used to identify a 
//resource instead of a less human-readable identifier like an id . 
//You use a slug when you want to refer to an item while preserving 
//the ability to see, at a glance, what the item is.