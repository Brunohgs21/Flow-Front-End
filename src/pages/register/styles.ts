import { styled } from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 80%;
    }
  }
`;
