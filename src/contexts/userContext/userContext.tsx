import React, { createContext, useEffect, useState } from "react";

export type UserData = {
  email: string;
  name: string;
};

type UserContextValue = {
  user: UserData;
  setUserData: (user: UserData) => void;
  clearUserData: () => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextValue);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const setUserData = ({
    email: newEmailValue,
    name: newNameValue,
  }: UserData) => {
    setEmail(newEmailValue);
    setName(newNameValue);
  };

  const clearUserData = () => {
    setEmail("");
    setName("");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      const { email, name } = JSON.parse(userString);
      setEmail(email);
      setName(name);
    }
  }, []);

  useEffect(() => {
    if (email && name) {
      localStorage.setItem("user", JSON.stringify({ email, name }));
    }
  }, [email, name]);

  return (
    <UserContext.Provider
      value={{
        user: {
          email,
          name,
        },
        setUserData,
        clearUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
