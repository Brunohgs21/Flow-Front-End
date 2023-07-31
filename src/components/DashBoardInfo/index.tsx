import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useContact } from "../../hooks/useContact";
import { useAuth } from "../../hooks/useAuth";

interface User {
  name: string;
  email: string;
  phone: string;
}

export const DashboardInfo = () => {
  const {
    user: { name },
  } = useAuth();
  const [user, setUser] = useState<User>();
  const { setOpenModalProfile } = useContact();

  useEffect(() => {
    async function getUser() {
      const response = await api.get("/users");
      setUser(response.data);
    }
    getUser();
  }, [name]);

  return (
    <Container>
      <section>
        <span>
          Hello, <span>{user == undefined ? "User" : user.name}</span>
        </span>
        <button onClick={() => setOpenModalProfile(true)}>
          Edit personal info
        </button>
      </section>
    </Container>
  );
};
