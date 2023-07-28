import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardInfo } from "../../components/DashBoardInfo";
import DashboardMain from "../../components/DashBoardMain";

export const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardMain />

      <main></main>
    </>
  );
};
