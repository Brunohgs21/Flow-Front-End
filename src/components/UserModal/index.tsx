import { SubmitHandler, useForm } from "react-hook-form";
import { BackGround, DivModal } from "./styles";
import { useContact } from "../../hooks/useContact";
import { TUserSchemaUpdate } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserSchemaUpdate } from "../../schemas/index";
import { useAuth } from "../../hooks/useAuth";
import { useOutClick } from "../../hooks/useOutclick";
import { useRef } from "react";

const UserModal = () => {
  const { register, handleSubmit } = useForm<TUserSchemaUpdate>({
    resolver: zodResolver(UserSchemaUpdate),
  });
  const { setOpenModalProfile } = useContact();
  const { deleteUser, updateUser } = useAuth();
  const clickRef = useOutClick(() => setOpenModalProfile(false), 2);
  const divRef = useRef(null);
  const onSubmit: SubmitHandler<TUserSchemaUpdate> = async (
    data: TUserSchemaUpdate
  ) => {
    const newData: TUserSchemaUpdate = {} as TUserSchemaUpdate;

    const keys = Object.keys(data) as (keyof TUserSchemaUpdate)[];

    for (const key of keys) {
      if (
        data[key] !== undefined &&
        typeof data[key] === "string" &&
        data[key]?.trim() !== ""
      ) {
        newData[key] = data[key];
      }
    }

    updateUser(newData);
  };

  return (
    <BackGround ref={clickRef}>
      <DivModal ref={divRef}>
        <div>
          <h1>Edit info</h1>
          <button
            className="closeBtn"
            onClick={() => setOpenModalProfile(false)}
          ></button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
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
