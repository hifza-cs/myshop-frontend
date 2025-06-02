import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/check-user", { withCredentials: true });
      setUser(res.data?.user);
    };
    getData();
  }, []);

  const signup = async (form) => {
    const res = axios.post("/signup", form);
    setUser(res.data?.user);
    return res;
  };

  const logout = async () => {
    const res = await axios.delete("/logout");
    if (res.status === 200) {
      setUser(null);
    }
    return res;
  };

  const value = {
    user,
    signup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const AppContext = () => useContext(AuthContext);
