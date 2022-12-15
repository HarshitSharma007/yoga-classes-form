const Validator =require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data){

    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    

    //Name checks
    if(Validator.isEmpty(data.name)) {
        errors.data = "Name field is required";
    }

    //Email checks
    if(Validator.isEmpty(data.email)){
        errors.data = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.data = "Email is invalid";
    }

    //Password checks
    if(Validator.isEmpty(data.password)){
        errors.data = "Password field is required";
    }

    if(parseInt(data.age)<18 || parseInt(data.age)>57 ){
        errors.data ="your age is not suitable for the course";
    }

    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.data = "Password must be at least 6 characters";
    }

   

    return{
        errors,
        isValid:isEmpty(errors)
    };

};