import { useForm } from "react-hook-form";
import { BackGround, DivModal } from "./styles";
import { useModal } from "../../hooks/useModal";
import { useContact } from "../../hooks/useContact";
import { ContactSchemaUpdate, TContactSchemaUpdate } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const ModalEdit = () => {
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
  const { setOpenModalEdit } = useModal();
  const { deleteContact, updateContact } = useContact();

  return (
    <BackGround>
      <DivModal>
        <div>
          <h1></h1>
          <button className="closeBtn" onClick={() => setOpenModalEdit(false)}>
            X
          </button>
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
              Salvar alterações
            </button>
          </section>
        </form>
        <button className="btnDelete" type="button" onClick={deleteContact}>
          Excluir
        </button>
      </DivModal>
    </BackGround>
  );
};

export default ModalEdit;
