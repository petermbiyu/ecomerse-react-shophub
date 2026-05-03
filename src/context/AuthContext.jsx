import { createContext, useState } from "react";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null,
  );
  function signup(name, email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userDetails", JSON.stringify({ name, email }));
    setUser({ name, email });
    return { success: true, message: "signup successful" };
  }
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    let existinguser = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (!existinguser) {
      return { success: false, message: "Invalid cridentials" };
    }
    const userDetail = {
      name: existinguser.name,
      email: existinguser.email,
    };
    setUser(userDetail);
    localStorage.setItem("userDetails", JSON.stringify(userDetail));
    return { success: true, message: "login succefull" };
  }

  function logout() {
    localStorage.removeItem("userDetails");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signup, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
