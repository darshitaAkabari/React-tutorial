export default function validateName(values) {
    let errors = {};
    if(!values.name) {
        errors.name = "Name is required"
    } else if(!/^[a-zA-Z]+$/.test(values.name)){
        errors.name = "Numbers or special characters are not allowed in name"
    }
    return errors;
}