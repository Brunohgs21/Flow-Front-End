import { ContactModal } from "../../components/ContactModal";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardInfo } from "../../components/DashBoardInfo";
import DashboardMain from "../../components/DashBoardMain";
import { useModal } from "../../hooks/useModal";

export const Dashboard = () => {
  const { openModal } = useModal();
  return (
    <>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardMain />
      {openModal ? <ContactModal /> : null}
    </>
  );
};
