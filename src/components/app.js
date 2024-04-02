// const express= require("express")
// const collection= require("./mongo")
// const cors = require("cors")
// const app=express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors())


// //login
// app.get("/",cors(),(req,res)=>{

// })

// app.post("/",async(req,res)=>{
//     const{email,password}=req.body
//     try{
//      const check=await collection.findOne({email:email})
//      if(check){
//         res.json("exist")
//      }


//      else{
//         res.json("not-exist")
//      }
//     }
//     catch(e){
//       res.json("not-exist")
//     }
// })

// //signup
// app.post("/register",async(req,res)=>{
//     const{email,password}=req.body


//     const data={
//         email:email,
//         password:password
//     }
//     try{
//      const check=await collection.findOne({email:email})
//      if(check){
//         res.json("Already exists")
//      }


//      else{
//         res.json("New")
//         await collection.insertMany([data])
//      }
//     }
//     catch(e){
//       res.json("not-exist")
//     }
// })

// app.listen(8000,()=>{
//     console.log("Port Connected")
// })




// //QiJrWimGrZzXFGYt : password 


// //mongodb+srv://nakulmantri2001:QiJrWimGrZzXFGYt@cluster0.sgeagru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0