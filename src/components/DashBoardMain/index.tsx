import { Main } from "./styles";
import Board from "../Board/Board";
import { useContact } from "./../../hooks/useContact";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}
export const DashboardMain = () => {
  const { setOpenModal } = useContact();
  return (
    <Main>
      <div>
        <p className="techText">My contacts</p>
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      <Board />
    </Main>
  );
};

export default DashboardMain;
