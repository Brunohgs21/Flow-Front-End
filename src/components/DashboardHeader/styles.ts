import { styled } from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5rem 0 12.5rem;

  border-bottom: 0.0313rem solid #868e96;

  @media (max-width: 700px) {
    padding: 0 5% 0 5%;
    width: 100%;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;
    cursor: pointer;

    width: 3.4681rem;
    height: 2rem;

    /* grey-3 */

    background: #212529;
    border-radius: 0.25rem;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.75rem;
    /* identical to box height, or 237% */

    text-align: center;

    /* grey-0 */

    color: #f8f9fa;
    @media (max-width: 700px) {
      padding: 0;
    }
  }
  button:hover {
    background-color: #ff577f;
    transition: 1s ease;
  }
`;
export const Logo = styled.h1`
  font-family: "Inter", sans-serif;

  /* color-primary */

  color: #ff577f;
`;
