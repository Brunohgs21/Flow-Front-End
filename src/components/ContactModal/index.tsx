import { SubmitHandler, useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";
import { useModal } from "../../hooks/useModal";
import { BackGround, DivModal } from "./styles";
import { ContactData, contactSchema } from "../DashBoardMain/Validator";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactModal = () => {
  const { setOpenModal } = useModal();
  const { postContact } = useContact();
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });
  const submit: SubmitHandler<ContactData> = async (data) => {
    console.log(data);
    postContact(data);
  };
  return (
    <BackGround>
      <DivModal>
        <div>
          <h1>Cadastre novos contatos</h1>
          <button className="closeBtn" onClick={() => setOpenModal(false)}>
            X
          </button>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="phone" {...register("phone")} />
            <button type="submit" className="buttonSubmit">
              Cadastrar
            </button>
          </form>
        </div>
      </DivModal>
    </BackGround>
  );
};
