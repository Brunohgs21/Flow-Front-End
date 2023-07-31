import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useModal } from "../../hooks/useModal";

interface User {
  name: string;
  email: string;
  phone: string;
}

export const DashboardInfo = () => {
  const [user, setUser] = useState<User>();
  const { setOpenModalProfile } = useModal();

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
        <span>
          Olá, <span>{user == undefined ? "Usuário" : user.name}</span>
        </span>
        <button onClick={() => setOpenModalProfile(true)}>
          Editar informações pessoais
        </button>
      </section>
    </Container>
  );
};
