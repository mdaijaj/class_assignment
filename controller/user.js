const User_details=require('../models/class_schema')

const post_class=(req,res)=>{
   var obj = new User_details(req.body);
   obj.save()
   .then((data)=>{
       console.log(data)
       res.send("User inseted Successfully!")
   })
   .catch((err)=>{
       console.log(err)
       message: err.message || "Some error occurred while creating the User."
       res.send(err.message)
   })
}


const future_class= async(req,res)=>{
    console.log("api is working...")
    User_details.find({start_time: { $gte: req.query.start_time}})
    .then((all_data)=>{
        if(all_data.length){
            console.log(all_data)
            res.send(all_data)
        }else{
            res.send("no future class.........")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getfilter= async(req,res)=>{
    console.log("api is working...")
    User_details.find({
        $or:[{
            title: req.query.title
        }, {
            description: req.query.description
        },{
            End_date:  { $gte: req.query.start_time, $lte: req.query.end_time }
        }],
    })
    .then((all_data)=>{
        if(all_data.length){
            console.log(all_data)
            res.send(all_data)
        }else{
            res.send("class.........")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}



module.exports={
   post_class,
   getfilter,
   future_class
}