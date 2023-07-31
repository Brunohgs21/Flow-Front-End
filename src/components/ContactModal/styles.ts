import { styled } from "styled-components";

export const DivModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 369px;
  height: 342px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  div {
    display: flex;

    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding: 12px 20px;
  }
  .closeBtn {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    background-color: transparent;
    border: none;
    cursor: pointer;

    color: #868e96;
  }
  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 90%;

    position: absolute;
    top: 40px;
  }

  label {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
    margin-top: 13px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 37px;

    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  .buttonSubmit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    cursor: pointer;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    margin-top: 10px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  .buttonSubmit:hover {
    background-color: #121214;
    color: #ff577f;
    border: #ff577f;
    transition: 1s ease;
  }

  section {
    display: flex;
    gap: 22px;
    margin-top: 10px;
  }

  .btnSave {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    width: 204px;
    height: 48px;
    cursor: pointer;

    background: #59323f;

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }
  .btnSave:hover {
    background-color: #ff577f;
    transition: 1s ease;
  }

  .btnDelete {
    position: absolute;
    bottom: 16px;
    right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    width: 98px;
    height: 48px;
    cursor: pointer;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }
  .btnDelete:hover {
    color: #121214;
    transition: 1s ease;
  }
  @media (max-width: 800px) {
    width: 300px;
  }
`;

export const BackGround = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
`;
