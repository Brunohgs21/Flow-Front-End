import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface User {
  name: string;
  email: string;
  phone: string;
}

export const DashboardInfo = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getUser() {
      const response = await api.get("/users");
      setUser(response.data);
    }
    getUser();
  }, []);

  return (
    <Container>
      <section>
        <span className="name">
          Olá, <span>{user == undefined ? "Usuário" : user.name}</span>
        </span>
        <button>Editar informações pessoais</button>
      </section>
    </Container>
  );
};
