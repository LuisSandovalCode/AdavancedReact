import React,{ createContext,useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem("token");
    });

    const value = {
        isAuth,
        ActiveteAuth : token =>{
            setIsAuth(true);
            window.sessionStorage.setItem("token",token);
        },
        RemoveAuth: () =>{
            setIsAuth(false);
            window.sessionStorage.removeItem("token");
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default {
    Provider: Provider,
    Consumer: Context.Consumer
};

