import { ContactModal } from "../../components/ContactModal";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardInfo } from "../../components/DashBoardInfo";
import DashboardMain from "../../components/DashBoardMain";
import { ModalEdit } from "../../components/ModalEdit";
import UserModal from "../../components/UserModal";
import { useContact } from "../../hooks/useContact";

export const Dashboard = () => {
  const { openModal, openModalEdit, openModalProfile } = useContact();
  return (
    <>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardMain />
      {openModal ? <ContactModal /> : null}
      {openModalEdit ? <ModalEdit /> : null}
      {openModalProfile ? <UserModal /> : null}
    </>
  );
};
