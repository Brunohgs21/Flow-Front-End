import { Main } from "./styles";
import Board from "../Board/Board";
import { useModal } from "../../hooks/useModal";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}
export const DashboardMain = () => {
  const { setOpenModal } = useModal();
  return (
    <Main>
      <div>
        <p className="techText">Contacts</p>
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      <Board />
    </Main>
  );
};

export default DashboardMain;
