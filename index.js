const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT||8000
const {getpasswords,postpassword,deletepassword,Passwords}=require('./db');



// Load input validation
const validateRegisterInput = require("./validation/register");
const validateLoginInput = require("./validation/login");



app.post("/push",(req,res)=>{

    const {errors, isValid} = validateRegisterInput(req.body);
    if(!isValid){
        console.log(errors);
        return res.status(400).json(errors);
    }
    const {password,email,age,name,month,batch}=req.body;
//    const hashedPassword = encrypt(password);
Passwords.findOne({email:req.body.email}).then(user=>{

    if(user){
        return res.status(400).json({data:"Email already exists"});
    } else{
        const t={
    
            email:email,
            password:password,
            name:name,
            age:age,
            batch:batch,
            month:month
            
        
        }
              console.log(t);
            postpassword(t).then(()=>{res.status(201).send("done")}).catch((e)=>{ console.log(e) ;res.status(402).send(e)});
    }

});

})
app.get("/allpasswords",(req,res)=>{
     getpasswords().then((r)=>{res.status(200).send(r);}).catch((e)=>{console.log(e)});
    
})







app.listen(PORT,()=>{
    console.log('app is running hurray');
})