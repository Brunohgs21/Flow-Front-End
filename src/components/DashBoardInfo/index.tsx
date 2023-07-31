import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useModal } from "../../hooks/useModal";
import { useContact } from "../../hooks/useContact";
import { useAuth } from "../../hooks/useAuth";

interface User {
  name: string;
  email: string;
  phone: string;
}

export const DashboardInfo = () => {
  // const [user, setUser] = useState<User>();
  const { user } = useAuth();
  console.log(user);
  const { setOpenModalProfile } = useModal();

  // useEffect(() => {
  //   async function getUser() {
  //     const response = await api.get("/users");
  //   }
  //   getUser();
  // }, []);

  return (
    <Container>
      <section>
        <span>
          Hello, <span>{user == undefined ? "Usuário" : user.name}</span>
        </span>
        <button onClick={() => setOpenModalProfile(true)}>Edit profile</button>
      </section>
    </Container>
  );
};
