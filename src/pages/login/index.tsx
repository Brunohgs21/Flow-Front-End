import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Div, DivForm, Link } from "./styles";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<LoginData> = async (data) => {
    signIn(data);
  };

  useEffect(() => {
    (async () => {
      try {
        await api.get("/users");
        const toNavigate = location.state?.from?.pathname || "/dashboard";

        navigate(toNavigate, { replace: true });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Div>
      <h2>Contact Flow</h2>
      <DivForm>
        <form onSubmit={handleSubmit(submit)}>
          <div className="emailDiv">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
          </div>
          <div className="passwordDiv">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <button type="submit">LogIn</button>
        </form>
        <div className="divText">
          <p className="p">Don't have an account?</p>
        </div>
        <Link to="/signup">Sign Up</Link>
      </DivForm>
    </Div>
  );
};
