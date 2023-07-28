import { Main } from "./styles";
import Board from "../Board/Board";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}
export const DashboardMain = () => {
  return (
    <Main>
      <div>
        <p className="techText">Contatos</p> <button>+</button>
      </div>
      <Board />
    </Main>
  );
};

export default DashboardMain;
