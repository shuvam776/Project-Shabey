import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import api from "../lib/axios";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  profileCompletion: number;
  usertype?: string;
  address?: string;
}


interface AuthContextType {
  user: User | null;
  loading: boolean;
  loggedIn: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await api.get("/auth/user");
          setUser(res.data);
        } catch (err) {
          console.error("Auth init failed", err);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = (token: string, userData: User) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      const res = await api.put("/auth/profile", userData);
      setUser(res.data.user);
    } catch (err) {
      console.error("Update profile failed", err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loggedIn: !!user, login, logout, updateUser }}>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
