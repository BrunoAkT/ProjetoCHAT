import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface AuthContextType {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextType>(
    {
        user: null,
        setUser: () => { }
    }
);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);

    return React.createElement(AuthContext.Provider, { value: { user, setUser } }, children);

}

export { AuthContext, AuthProvider };