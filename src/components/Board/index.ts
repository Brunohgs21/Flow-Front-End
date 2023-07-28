import { styled } from "styled-components";

export const List = styled.div`
  padding: 0 12.5rem 0 12.5rem;
  width: 100%;
  text-align: center;

  max-height: 416px;
  .empty {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */
    margin-bottom: 30px;

    color: #ffffff;
    margin-top: 25px;
  }

  ul {
    background-color: #212529;
    width: 100%;
    max-height: 416px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 15px;
    overflow: auto;
  }
`;
