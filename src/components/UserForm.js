import React from "react";
import validateName from "../validations/NameValidation";
import useName from "../customHooks/useName"

function UserForm() {

    const {values, errors, handleChange, handleSubmit} = useName(validateName)

    return (
        <div>
        <form> 
             <br/>
            <label>Name</label>
            <input type="text" name="name" value={values.name || ''} onChange={handleChange} required /> <br/>
            {errors.name && (
                    <p>{errors.name}</p>
                  )}
            <label>User name</label>
            <input type="text" name="userName" value={values.userName || ''} onChange={handleChange}/> <br/>
            <input type="submit" name="submit" onClick={handleSubmit}/>
        </form>
        </div>
    );
};

export default UserForm;