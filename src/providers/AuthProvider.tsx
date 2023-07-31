// import { createContext, useEffect, useState } from "react";
// import { LoginData } from "../pages/login/validator";
// import { api } from "../services/api";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/ReactToastify.css";
// import { TUserSchemaUpdate } from "../schemas";

// interface AuthProviderProps {
//   children: React.ReactNode;
// }

// interface AuthContextValues {
//   signIn: (data: LoginData) => void;
//   loading: boolean;
//   user: LoggedUser;
//   registerUser: (data: IUserRegister) => void;
//   updateUser: (data: TUserSchemaUpdate) => void;
//   deleteUser: () => void;
//   setUser: (data: LoggedUser) => void;
// }

// interface LoggedUser {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
// }
// interface IUserRegister {
//   email: string;
//   password: string;
//   name: string;
// }

// interface LoginResponse {
//   token: string;
//   loggedUser: {
//     id: string;
//     name: string;
//     email: string;
//     phone: string;
//     createdAt: string;
//   };
// }

// export const AuthContext = createContext({} as AuthContextValues);

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [user, setUser] = useState({} as LoggedUser);
//   const [loading, setLoading] = useState(true);
//   const [newUser, setNewUser] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("flow:token");
//     (async () => {
//       if (!token) {
//         setLoading(false);
//         return;
//       }
//       try {
//         api.defaults.headers.common.Authorization = `Bearer ${token}`;
//         const response = await api.get("/profile");
//         setUser(response.data);
//       } catch (error) {
//         console.log("erro1");
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   const signIn = async (data: LoginData) => {
//     try {
//       const reponse = await api.post<LoginResponse>("/login", data);

//       const { token, loggedUser } = reponse.data;
//       const { name, email, phone } = loggedUser;
//       localStorage.setItem("userName", name);
//       localStorage.setItem("userEmail", email);
//       localStorage.setItem("userPhone", phone);

//       setUser(loggedUser);
//       api.defaults.headers.common.Authorization = `Bearer ${token}`;
//       localStorage.setItem("flow:token", token);

//       setLoading(false);
//       const toNavigate = location.state?.from?.pathname || "/dashboard";

//       navigate(toNavigate, { replace: true });
//     } catch (error: any) {
//       console.log(error);
//       console.log("erro2");

//       toast.error(error.response.data!.message);
//     }
//   };

//   const registerUser = async (data: IUserRegister) => {
//     try {
//       await api.post("users", data);
//       toast.success("Sucessfully registered!");
//       setTimeout(() => {
//         navigate("/");
//       }, 6000);
//     } catch (error: any) {
//       console.log(error);
//       toast.error(error.response.data!.message);
//     }
//   };

//   const reloadUser = async () => {
//     try {
//       const response = await api.get<LoggedUser>("/profile");
//       setUser(response.data);
//     } catch (error) {
//       console.log("erro3");
//       console.log(error);
//     }
//   };

//   const updateUser = async (data: TUserSchemaUpdate) => {
//     try {
//       console.log(data);
//       await api.patch("users", data);
//       toast.success("Sucessfully updated!");
//       reloadUser();
//     } catch (error: any) {
//       console.log("erroupdate");
//       console.log(error);
//       toast.error(error.response.data!.message);
//     }
//   };

//   const deleteUser = async () => {
//     try {
//       await api.delete("users");
//       localStorage.clear();
//       navigate("/", { replace: true });
//       toast.success("Sucessfully deleted!");
//     } catch (error: any) {
//       console.log(error);
//       toast.error(error.response.data!.message);
//     }
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         signIn,
//         loading,
//         user,
//         registerUser,
//         updateUser,
//         deleteUser,
//         setUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  user: LoggedUser;
  registerUser: (data: IUserRegister) => void;
}

interface LoggedUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}
interface IUserRegister {
  email: string;
  password: string;
  name: string;
}

interface LoginResponse {
  token: string;
  loggedUser: {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
  };
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as LoggedUser);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("flow:token");
    (async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const reponse = await api.post<LoginResponse>("/login", data);

      const { token, loggedUser } = reponse.data;

      setUser(loggedUser);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("flow:token", token);

      setLoading(false);
      const toNavigate = location.state?.from?.pathname || "/dashboard";

      navigate(toNavigate, { replace: true });
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data!.message);
    }
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      await api.post("users", data);
      toast.success("Sucessfully registered!");
      setTimeout(() => {
        navigate("/");
      }, 6000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data!.message);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn, loading, user, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
