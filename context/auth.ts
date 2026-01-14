import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";

interface AuthContextType {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
    updateUserStatus: (status: string) => void;
}

const AuthContext = createContext<AuthContextType>(
    {
        user: null,
        setUser: () => { },
        updateUserStatus: () => { }
    }
);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);

    const updateUserStatus = (status: string) => {
        setUser((prevUser: any) => {
            if (!prevUser) return null;
            return { ...prevUser, status };
        });
    }

    const value = useMemo(() => ({ user, setUser, updateUserStatus }), [user]);



    return React.createElement(AuthContext.Provider, { value }, children);

}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


export { AuthContext, AuthProvider, useAuth };

