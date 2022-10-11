import styled from "styled-components";

export const Navbar = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  gap: 13vw;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--grey-3);
  position: fixed;

  h1 {
    margin: 30px;
    font-family: var(--font);
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.3rem;
    text-align: center;
  }

  button {
    margin: 30px;
    font-family: var(--font);
    color: var(--grey-0);
    border: none;
    background-color: var(--grey-3);
    width: 70px;
    height: 30px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
`;


