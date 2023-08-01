import { ContactItem } from "./styles";
import { useContact } from "../../hooks/useContact";

interface CardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const Card = ({ id, name, email, phone }: CardProps) => {
  const { setOpenModalEdit } = useContact();
  const edit = () => {
    localStorage.setItem("ContactId", id);
    localStorage.setItem("ContactName", name);
    localStorage.setItem("ContactEmail", email);
    localStorage.setItem("ContactPhone", phone);
    setOpenModalEdit(true);
  };
  return (
    <ContactItem onClick={edit}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>Edit</p>
    </ContactItem>
  );
};
