import { createContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

export interface User {
  _id: string;
  names: string;
  email: string;
  pic: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserContext = createContext<User | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userString: string | undefined = Cookies.get("user");
    if (!userString) {
      router.replace("/signin");
    } else {
      const userFromCookie: User = JSON.parse(userString);
      setUser(userFromCookie);
    }
  }, [router]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
