const mongoose=require('../database/db')
const uniqueValidator = require('mongoose-unique-validator')

let classSchema= new mongoose.Schema({
   title: {
      type: String, 
      required:true,
      unique: true,
      min: 4,
      max: 80 
   },
   description: {
      type:String, 
      trim: true,
      min: 15,
      max: 600
   },
   student_no: {
      type:Number,
      required: true,
      min: 1,
      max: 50
   },
   class_type:{
    type: String,
    enum: ['Yoga', 'Pilates', 'Cardio'],
    default: "Yoga"
   },
   start_time: {
   type : Date,
    required: true
   },
   end_time: {
    type: Date,
    required: true
   }
}, {timestamps: true});     


classSchema.plugin(uniqueValidator)
module.exports= mongoose.model('User_details', classSchema);