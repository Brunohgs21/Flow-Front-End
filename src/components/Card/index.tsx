import { ContactItem } from "./styles";

interface CardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const Card = ({ id, name, email, phone }: CardProps) => {
  const edit = () => {
    localStorage.setItem("ContactId", id);
    localStorage.setItem("ContactName", name);
    localStorage.setItem("ContactEmail", email);
    localStorage.setItem("ContactPhone", phone);
  };
  return (
    <ContactItem onClick={edit}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>Clique para editar</p>
    </ContactItem>
  );
};
