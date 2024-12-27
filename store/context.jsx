"use client";
import { createContext, useEffect, useState } from "react";
import { account } from "../app/services/appwrite";

const userContext = createContext(null);

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      setUser(account.get());
    };
    getUser();
  }, [user]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
export { SessionProvider };
