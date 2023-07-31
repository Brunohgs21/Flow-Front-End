import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;

  color: var(--color-grey-3);

  &:hover {
    color: var(--color-grey-dark);
    transition: 0.5s ease;
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 80%;
    }
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  color: var(--color-grey-4);
  font-family: "Inter", sans-serif;
  background: var(--color-white);

  border: 2px solid var(--color-grey-1);
  border-radius: 5px;
  padding: 33px 24px 28px 24px;
  .relative {
    position: relative;
    margin-bottom: 0;
  }
  .schemaText {
    color: var(--color-grey-4);
    font-family: "Inter", sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

    font-family: "Inter", sans-serif;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    color: var(--color-grey-dark);
  }

  label {
    width: 40px;
    height: 15px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    background-color: var(--color-white);

    color: var(--color-grey-4);
    margin-left: 2.5rem;
    position: absolute;
    left: 0;
    bottom: 3.1875rem;
    text-align: center;
  }

  input {
    background: var(--color-white);
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    border: 0.125rem solid var(--color-main-3);
    border-radius: 0.5rem;
    height: 3.75rem;
    width: 100%;
    padding-left: 0.9375rem;
    margin-top: 0.9375rem;
  }

  .nameDiv {
    position: relative;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
  }
  .emailDiv {
    position: relative;
    flex-direction: column;
    margin-bottom: 0;
  }
  .phoneDiv {
    position: relative;
    flex-direction: column;
    margin-bottom: 0;
  }

  button {
    padding: 0rem 2.5rem;
    gap: 0.625rem;

    height: 3.75rem;
    margin-top: 0.9375rem;

    background: var(--color-grey-2);
    border-radius: 0.5rem;
    border: transparent;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.75rem;

    text-align: center;

    color: var(--color-grey-3);
    &:hover {
      color: var(--color-grey-1);
      background-color: var(--color-grey-3);
      border: 0.0625rem solid var(--color-grey-dark);
      transition: 0.5s ease;
    }
  }

  .btnLogin {
    height: 60px;
    background: var(--color-main-2);
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    text-align: center;

    color: var(--color-white);
    &:hover {
      color: var(--color-main);
      background-color: var(--color-white);
      border: 1px solid var(--color-main);
      transition: 0.5s ease;
    }
  }
  #confirmation {
    margin-top: 0;
  }

  .divText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
  .p {
    margin-top: 1.25rem;
    width: 20.4375rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.125rem;

    text-align: center;

    color: var(--color-grey-4);
  }
  .title {
    font-family: "Inter", sans-serif;
  }
  @media (max-width: 700px) {
    width: 90%;
    input {
      height: 2.1875rem;
    }
    label {
      bottom: 1.6875rem;
    }

    button {
      height: 2.1875rem;
    }
    .btnLogin {
      height: 2.1875rem;
    }
    .headerDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const DivCheck = styled.div`
  position: absolute;
  background: var(--color-grey-1);
  width: 100%;

  border-radius: 0.5rem;
  padding: 0.3125rem;
  top: -0.9375rem;
  display: flex;
  flex-direction: column;

  .valid {
    display: none;
  }
  .invalid {
    color: var(--color-grey-4);
  }
`;

export const Link2 = styled(LinkRouter)`
  width: 100%;
  height: 3.75rem;

  background: var(--color-grey-1);
  border-radius: 8px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.25rem;

  color: var(--color-grey-3);
  &:hover {
    color: var(--color-grey-1);
    background-color: var(--color-grey-3);
    border: 0.0625rem solid var(--color-grey-dark);
    transition: 0.5s ease;
  }
  @media (max-width: 700px) {
    height: 2.1875rem;
  }
`;
