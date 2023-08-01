import { Logo } from "./styles";
import { Header } from "./styles";
import { useNavigate } from "react-router-dom";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  function verifyPermission() {
    const user = localStorage.getItem("flow:token") || "";

    if (user == "" || undefined) {
      navigate("/", { replace: true });
    }
  }

  function logout() {
    localStorage.clear();
    verifyPermission();
  }

  return (
    <Header>
      <Logo>Contact Flow</Logo>
      <button onClick={logout}>Log Out</button>
    </Header>
  );
};
