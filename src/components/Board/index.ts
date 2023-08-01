import { styled } from "styled-components";

export const List = styled.div`
  padding: 0 12.5rem 0 12.5rem;
  width: 100%;
  text-align: center;

  max-height: 26rem;
  .empty {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 2.6rem;
    margin-bottom: 3rem;
    color: var(--color-white);
    margin-top: 2.5rem;
  }

  ul {
    background-color: var(--color-gray-850);
    width: 100%;
    max-height: 41.6rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1.5rem;
    overflow: auto;
  }
`;
