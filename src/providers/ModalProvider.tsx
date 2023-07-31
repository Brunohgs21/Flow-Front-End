// import { Dispatch, createContext, useState } from "react";

// interface ModalProviderProps {
//   children: React.ReactNode;
// }

// interface ModalContextValues {
//   openModal: boolean;
//   setOpenModal: Dispatch<React.SetStateAction<boolean>>;
//   openModalEdit: boolean;
//   setOpenModalEdit: Dispatch<React.SetStateAction<boolean>>;
//   openModalProfile: boolean;
//   setOpenModalProfile: Dispatch<React.SetStateAction<boolean>>;
// }

// export const ModalContext = createContext({} as ModalContextValues);

// export const ModalProvider = ({ children }: ModalProviderProps) => {
//   const [openModal, setOpenModal] = useState(false);
//   const [openModalEdit, setOpenModalEdit] = useState(false);
//   const [openModalProfile, setOpenModalProfile] = useState(false);
//   return (
//     <ModalContext.Provider
//       value={{
//         openModal,
//         setOpenModal,
//         openModalEdit,
//         setOpenModalEdit,
//         openModalProfile,
//         setOpenModalProfile,
//       }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// };
