import { useLocation, Navigate } from "react-router-dom";
import { ContactModal } from "../../components/ContactModal";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardInfo } from "../../components/DashBoardInfo";
import DashboardMain from "../../components/DashBoardMain";
import ModalEdit from "../../components/ModalEdit";
import UserModal from "../../components/UserModal";
import { useModal } from "../../hooks/useModal";

export const Dashboard = () => {
  const { openModal, openModalEdit, openModalProfile } = useModal();
  const token = localStorage.getItem("flow:token");
  const location = useLocation();
  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }
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
