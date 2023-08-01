import { styled } from "styled-components";

export const ContactItem = styled.li`
  width: 95%;
  min-height: 4.9rem;

  background: #121214;
  border-radius: 4px;

  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;

  padding-left: 13px;
  padding-right: 13px;

  color: #f8f9fa;

  &&:hover {
    background-color: #343b41;
    transition: 1s ease;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 70%;
  }
`;
