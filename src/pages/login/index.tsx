import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<LoginData> = async (data) => {
    signIn(data);
  };

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};
