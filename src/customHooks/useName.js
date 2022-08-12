import { useEffect, useState } from "react";
import { addUser } from "../services/UserMenuService";

const useName = (validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
    }

    useEffect(() => {
        if(errors.name === undefined)
        {
            addUser(values.name, values.userName)
        }
    },[errors])

    const handleChange = (event) => {
        setValues(values => ({...values, [event.target.name]: event.target.value}));
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }

}

export default useName