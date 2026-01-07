import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

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

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


export { AuthContext, AuthProvider, useAuth };