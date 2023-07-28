import { ContactItem } from "./styles";

interface CardProps {
  id: string;
  name: string;
}

export const Card = ({ id, name }: CardProps) => {
  const edit = () => {
    localStorage.setItem("ContactId", id);
    localStorage.setItem("ContactName", name);
  };
  return (
    <ContactItem onClick={edit}>
      <p>{name}</p>
    </ContactItem>
  );
};
