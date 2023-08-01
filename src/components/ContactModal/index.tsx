import { SubmitHandler, useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";
import { BackGround, DivModal } from "./styles";
import { ContactData, contactSchema } from "../DashBoardMain/Validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useOutClick } from "../../hooks/useOutclick";

export const ContactModal = () => {
  const { setOpenModal } = useContact();
  const { postContact } = useContact();
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });
  const submit: SubmitHandler<ContactData> = async (data) => {
    postContact(data);
  };
  const clickRef = useOutClick(() => setOpenModal(false), 2);
  const divRef = useRef(null);
  return (
    <BackGround ref={clickRef}>
      <DivModal ref={divRef}>
        <div>
          <h1>Register new contacts</h1>
          <button
            className="closeBtn"
            onClick={() => setOpenModal(false)}
          ></button>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="phone" {...register("phone")} />
            <button type="submit" className="buttonSubmit">
              Register
            </button>
          </form>
        </div>
      </DivModal>
    </BackGround>
  );
};
