import { createContext } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
}

interface LoginResponse {
  token: string;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const signIn = async (data: LoginData) => {
    try {
      const reponse = await api.post<LoginResponse>("/login", data);

      const { token } = reponse.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
