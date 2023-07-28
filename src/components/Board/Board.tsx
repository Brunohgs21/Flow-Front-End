import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Contact } from "../DashBoardMain";
import { List } from "./index";
import { Card } from "../Card";

const Board = () => {
  // const { user } = useContext(TechContext);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");
      setContacts(response.data);
    })();
  }, []);

  return (
    <List>
      <ul>
        {contacts === undefined || contacts.length == 0 ? (
          <p className="empty">Cadastre novos contatos</p>
        ) : (
          contacts.map((item) => (
            <Card key={item.id} id={item.id} name={item.name}></Card>
          ))
        )}
      </ul>
    </List>
  );
};

export default Board;
