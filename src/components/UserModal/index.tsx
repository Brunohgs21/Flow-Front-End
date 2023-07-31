import { SubmitHandler, useForm } from "react-hook-form";
import { BackGround, DivModal } from "./styles";
import { useModal } from "../../hooks/useModal";
import { useContact } from "../../hooks/useContact";
import {
  ContactSchemaUpdate,
  TContactSchemaUpdate,
  TUserSchema,
  TUserSchemaUpdate,
} from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { z } from "zod";
import { UserSchemaUpdate } from "../../schemas/index";
import { useAuth } from "../../hooks/useAuth";

interface IUser {
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  password: string;
  id: string;
}

const UserModal = () => {
  //   const [user, setUser] = useState<IUser | null>();
  //   useEffect(() => {
  //     (async () => {
  //       const token = localStorage.getItem("flow:token");
  //       const user = await api.get("/users");
  //       setUser(user.data);
  //     })();
  //   }, []);
  //   const { deleteTech, updateTech } = useContext(TechContext);
  //   useEffect(() => {
  //     () => {
  //       const user = localStorage.getItem("user");
  //       setUser(JSON.parse(user!));
  //     };
  //   });
  const userName = localStorage.getItem("userName") || "";
  const userEmail = localStorage.getItem("userEmail") || "";
  const userPhone = localStorage.getItem("userPhone") || "";
  const { register, handleSubmit } = useForm<TUserSchemaUpdate>({
    resolver: zodResolver(UserSchemaUpdate),
    // defaultValues: {
    //   name: userName,
    //   email: userEmail,
    //   phone: userPhone,
    // },
  });
  const { setOpenModalProfile } = useModal();
  const { deleteUser } = useAuth();

  const onSubmit: SubmitHandler<TUserSchemaUpdate> = async (data) => {
    // Criar um novo objeto para armazenar os dados filtrados
    const newData: TUserSchemaUpdate = {} as TUserSchemaUpdate;

    // Obter um array com as chaves do objeto data
    const keys = Object.keys(data) as (keyof TUserSchemaUpdate)[];

    // Percorrer as chaves do objeto data
    for (const key of keys) {
      // Verificar se a propriedade existe e se o valor é uma string não vazia
      if (
        data[key] !== undefined &&
        typeof data[key] === "string" &&
        data[key]!.trim() !== ""
      ) {
        newData[key] = data[key];
      }
    }

    console.log(newData);
    // Resto do seu código aqui...
  };
  return (
    <BackGround>
      <DivModal>
        <div>
          <h1></h1>
          <button
            className="closeBtn"
            onClick={() => setOpenModalProfile(false)}
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone" {...register("phone")} />
          <section>
            <button className="btnSave" type="submit">
              Save
            </button>
          </section>
        </form>
        <button className="btnDelete" type="button" onClick={deleteUser}>
          Delete
        </button>
      </DivModal>
    </BackGround>
  );
};

export default UserModal;
