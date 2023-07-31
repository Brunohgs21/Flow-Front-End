import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Div, DivForm, Link } from "./styles";

export const Login = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<LoginData> = async (data) => {
    signIn(data);
  };

  return (
    <Div>
      <h1>Contact Flow</h1>
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
        <Link to="/signup">SignUp</Link>
      </DivForm>
    </Div>
  );
};
