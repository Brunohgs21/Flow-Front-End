import { AuthProvider } from "./providers/AuthProvider";
import { ContactProvider } from "./providers/ContactProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
