import { Dispatch, createContext, useEffect, useState } from "react";
import { Contact } from "../components/DashBoardMain";
import { api } from "../services/api";
import { ContactData } from "../components/DashBoardMain/Validator";
import { TContactSchemaUpdate } from "../schemas";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { any } from "zod";

interface ContactProviderProps {
  children: React.ReactNode;
}

interface ContactContextValues {
  contacts: Contact[];
  postContact: (data: ContactData) => Promise<void>;
  updateContact: (data: TContactSchemaUpdate) => void;
  deleteContact: () => void;
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<React.SetStateAction<boolean>>;
  openModalProfile: boolean;
  setOpenModalProfile: Dispatch<React.SetStateAction<boolean>>;
}

export const ContactContext = createContext({} as ContactContextValues);

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("flow:token");
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        const response = await api.get<Contact[]>("/contacts");
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const reloadContacts = async () => {
    try {
      const response = await api.get<Contact[]>("/contacts");
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postContact = async (data: ContactData) => {
    try {
      await api.post("/contacts", data);
      reloadContacts();
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModal(false);
    }
  };

  const updateContact = async (data: TContactSchemaUpdate) => {
    try {
      const contactId = localStorage.getItem("ContactId");
      await api.patch(`/contacts/${contactId}`, data);
      toast.success("Sucessfully updated!");
      reloadContacts();
    } catch (error: any) {
      toast.error("Empty field!");
    } finally {
      setOpenModalEdit(false);
    }
  };

  const deleteContact = async () => {
    try {
      const contactId = localStorage.getItem("ContactId");
      await api.delete(`/contacts/${contactId}`);
      toast.success("Sucessfully deleted!");
      reloadContacts();
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModalEdit(false);
    }
  };
  return (
    <ContactContext.Provider
      value={{
        contacts,
        postContact,
        updateContact,
        deleteContact,
        openModal,
        setOpenModal,
        openModalEdit,
        setOpenModalEdit,
        openModalProfile,
        setOpenModalProfile,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
