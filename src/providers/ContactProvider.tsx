import { createContext, useEffect, useState } from "react";
import { Contact } from "../components/DashBoardMain";
import { api } from "../services/api";
import { ContactData } from "../components/DashBoardMain/Validator";

interface ContactProviderProps {
  children: React.ReactNode;
}

interface ContactContextValues {
  contacts: Contact[];
  postContact: (data: ContactData) => void;
  updateContact: (data: Contact) => void;
  deleteContact: () => void;
}

export const ContactContext = createContext({} as ContactContextValues);

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      try {
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
    }
  };

  const updateContact = async (data: ContactData) => {
    try {
      const contactId = localStorage.getItem("ContactId");
      await api.patch(`/contacts/${contactId}`, data);
      reloadContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async () => {
    try {
      const contactId = localStorage.getItem("ContactId");
      await api.delete(`/contacts/${contactId}`);
      reloadContacts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactContext.Provider
      value={{ contacts, postContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
