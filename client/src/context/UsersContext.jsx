import React, { createContext, useState } from "react";

export const AppContext = createContext();

const UsersContext = ({ children }) => {
    const [loginUser,setLoginUser]=useState({})
    const loginUsersData=(user)=>{
        setLoginUser(user)
    }
  return <AppContext.Provider value={{loginUser,loginUsersData}} >{children}</AppContext.Provider>;
};

export default UsersContext;
