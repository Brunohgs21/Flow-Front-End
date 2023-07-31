import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Contact } from "../DashBoardMain";
import { List } from "./index";
import { Card } from "../Card";
import { useContact } from "../../hooks/useContact";

const Board = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { contacts: contact } = useContact();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<Contact[]>("/contacts");
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [contact]);

  return (
    <List>
      <ul>
        {contacts === undefined || contacts.length == 0 ? (
          <p className="empty">Cadastre novos contatos</p>
        ) : (
          contacts.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
            ></Card>
          ))
        )}
      </ul>
    </List>
  );
};

export default Board;
