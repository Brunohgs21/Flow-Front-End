import { useForm } from "react-hook-form";
import { BackGround, DivModal } from "./styles";
import { ContactSchemaUpdate, TContactSchemaUpdate } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOutClick } from "../../hooks/useOutclick";
import { useRef } from "react";
import { useContact } from "./../../hooks/useContact";

export const ModalEdit = () => {
  const ContactName = localStorage.getItem("ContactName") || "";
  const ContactEmail = localStorage.getItem("ContactEmail") || "";
  const ContactPhone = localStorage.getItem("ContactPhone") || "";

  const { register, handleSubmit } = useForm<TContactSchemaUpdate>({
    resolver: zodResolver(ContactSchemaUpdate),
    defaultValues: {
      name: ContactName,
      email: ContactEmail,
      phone: ContactPhone,
    },
  });
  const { setOpenModalEdit } = useContact();
  const { deleteContact, updateContact } = useContact();
  const clickRef = useOutClick(() => setOpenModalEdit(false), 2);
  const divRef = useRef(null);

  return (
    <BackGround ref={clickRef}>
      <DivModal ref={divRef}>
        <div>
          <h1>Edit contact</h1>
          <button
            className="closeBtn"
            onClick={() => setOpenModalEdit(false)}
          ></button>
        </div>

        <form onSubmit={handleSubmit(updateContact)}>
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
        <button className="btnDelete" type="button" onClick={deleteContact}>
          Delete
        </button>
      </DivModal>
    </BackGround>
  );
};
