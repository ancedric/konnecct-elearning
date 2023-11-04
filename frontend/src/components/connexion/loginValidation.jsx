function validation(values){
    let errors = {}
    if(!values.email){
        errors.email = 'Email is required'
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email is invalid'
    }else{
        errors.email = ''
    }
    if(!values.password){
        errors.password = 'Password is required'
    } else{
        errors.password = ''
    }
    return errors
}
export default validation;