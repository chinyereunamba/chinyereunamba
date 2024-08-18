"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "@/services/appwrite";

const userContext = createContext(null);

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
export const useUserContext = () => {
  const user = useContext(userContext)
  if (user == null) return null
  return user
}
export { SessionProvider };
