import { styled } from "styled-components";

export const Container = styled.div`
  height: 118px;

  /* grey-4 */

  background: #121214;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.0313rem solid #868e96;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12.5rem 0 12.5rem;

    @media (max-width: 700px) {
      flex-direction: column;
      padding: 0;
    }
  }

  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* identical to box height, or 156% */

    /* grey-0 */

    color: #f8f9fa;
  }
  button {
    font-family: "Inter", sans-serif;
    background: #121214;
    border-radius: 0.25rem;
    color: #f8f9fa;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 0rem 1.0152rem;
  }
  button:hover {
    background-color: #343b41;
    color: #ffffff;
    transition: 1s ease;
  }
`;
