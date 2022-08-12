import React, { useContext, useEffect, useRef, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { UserContext } from "../context/UserContext";
import {getSortResult} from "../services/UserMenuService"

function SortResult() {

    const [val, setVal] = useState('')
    const [order, setOrder] = useState('asc')
    const [,setUser] = useContext(UserContext)
    const handleError = useErrorHandler();
    
    const inputRef = useRef();
    const orderRef = useRef();

    const sortResult = () => {
        setVal(inputRef.current.value)
        setOrder(orderRef.current.value)
    }

    useEffect(() => {
        getSortResult(val,order).then((res)=> {setUser(res)}).catch((e) => handleError(e))
    },[val, order, setUser, handleError])
    return (
        <div>
            <label>Sort by:   </label> 
            <input type="text" ref={inputRef} />
            <select name="order" onClick={sortResult} ref={orderRef}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    )
}

export default SortResult