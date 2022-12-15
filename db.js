const mongoose=require('mongoose')
const DB=''
mongoose.connect(DB).then(()=>{console.log('connection is successful')}).catch((e)=>{console.log(e)});

const UserSchema= new mongoose.Schema({
    email:{type:String,unique:true,trim:true},
    password:String,
    name: String,
    age : String,
    month: String  ,
    batch: String 


});

const Passwords = new mongoose.model("Users",UserSchema);
const postpassword =async (temp)=>{
    const pswd= new Passwords({
        email:temp.email,
        password:temp.password,
        age:temp.age,
        month:temp.month,
        batch:temp.batch,
        name:temp.name
        
    });

    const res= await pswd.save();
    console.log("User inserted into the database successfully",res);
}

const getpasswords= async ()=>{
  const res= await Passwords.find();
  console.log(res);
  return res;
}
const deletepassword=async (id)=>{
   
    const res= await Passwords.findByIdAndDelete(id);
    return res;
}

module.exports={getpasswords,postpassword,deletepassword,Passwords};