import React from "react";
import useFileUpload from "../customHooks/useFileUpload";

export default function FileUploader() {

    const {handleChange} = useFileUpload()
    
    return (
        <div>
            <p>Upload file here</p>
            <input type="file" name="file" multiple onInput={handleChange}></input>
        </div>
    )
}