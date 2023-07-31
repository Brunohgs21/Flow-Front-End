import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0 5% 0 5%;
  }

  .text {
    margin-top: 2.3125rem;
    margin-bottom: 1.4375rem;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* identical to box height, or 156% */

    /* grey-0 */

    color: #f8f9fa;
  }

  .text2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    /* identical to box height, or 152% */

    color: #ffffff;
  }

  div {
    display: flex;
    padding: 0 12.5rem 0 12.5rem;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;

    @media (max-width: 700px) {
      padding: 0;
    }
  }

  .techText {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #f8f9fa;
  }

  button {
    height: 32px;
    width: 32.485294342041016px;
    background: #121214;
    border-radius: 4px;
    color: #ffffff;
    font-size: large;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:hover {
    background-color: #343b41;
    color: #ffffff;

    transition: 1s ease;
  }
`;
