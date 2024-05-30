import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../../lib/crud";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await client.get("currentUser");
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (username, password) => {
    try {
      const userData = await client.get(`user:${username}`);
      if (userData && userData.password === password) {
        const role = await getRole(username);
        setUser({ ...userData, role });
        await client.set("currentUser", { ...userData, role });
        return true;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    return false;
  };

  const getRole = async (username) => {
    try {
      const roleData = await client.get(`role:${username}`);
      return roleData ? roleData.role : "Salesperson";
    } catch (error) {
      console.error("Error fetching role:", error);
      return "Salesperson";
    }
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