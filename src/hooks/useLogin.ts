import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { delay } from "../mocks/delay";

export function useLogin() {
  const [isFetching, setIsFetching] = useState(false);

  const { setUserData, clearUserData } = useContext(UserContext);

  return {
    login: async (email: string, password: string) => {
      setIsFetching(true);

      await delay();

      setIsFetching(false);

      if (
        email === import.meta.env.VITE_FAKE_EMAIL &&
        password === import.meta.env.VITE_FAKE_PASSWORD
      ) {
        setUserData({ email, name: "Fake Name" });
        return true;
      }
      return false;
    },
    logout: () => {
      clearUserData();
    },
    isFetching,
  };
}
