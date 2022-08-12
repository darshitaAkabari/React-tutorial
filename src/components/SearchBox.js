import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { getSearchResult } from "../services/UserMenuService"

function SearchBox() {

    const [, setUser] = useContext(UserContext)
    const [value, setValue] = useState()
    const updateTable = useCallback(() => {
        getSearchResult(value).then((res) => {setUser(res)})
    },[value, setUser])

    useEffect(() => {
        updateTable(value)
    },[value, updateTable])




    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default SearchBox
