import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../../lib/crud";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await client.get("currentUser");
      if (userData) {
        setUser(userData);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (username, password) => {
    // Implement login logic here
    const userData = await client.get(`user:${username}`);
    if (userData && userData.password === password) {
      setUser(userData);
      await client.set("currentUser", userData);
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    await client.delete("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);