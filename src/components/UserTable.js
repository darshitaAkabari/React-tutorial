import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserTable () {
  const [user] = useContext(UserContext);
  return (
    <div>
      <table>
          <tr>
            <td>Id </td>
            <td>Name</td>
            <td>UserName</td>
          </tr>
          {user.map((u) => (<tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            </tr>   
          ))}
        
      </table>
    </div>
  );
};

export default UserTable;
