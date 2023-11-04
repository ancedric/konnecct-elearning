function validation(values){
    let errors = {}
    if(!values.firstName){
        errors.firstName = 'Cannot be empty'
    } else {
        errors.firstName = ''
    }
    if(!values.lastName){
        errors.lastName = 'cannot be empty'
    } else {
        errors.lastName = ''
    }
    if(!values.email){
        errors.email = 'Email is required'
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email is invalid'
    }else{errors.email = ''
    }
    if(!values.password){
        errors.password = 'Password is required'
    } else{
        errors.password = ''
    }
    if(!values.country){
        errors.country = 'Please set your country'
    } else {
        errors.country = ''
    }
    if(!values.termsAndConditions){
        errors.termsAndConditions = 'Accept terms and conditions to continue'
    } else {
        errors.termsAndConditions = ''
    }
    return errors
}

export default validation;