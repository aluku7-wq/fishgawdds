import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 10vh;
  color: #fff;

  .response {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
    flex-direction: column;
    gap: 24px;

    a {
      background-color: yellow;
      padding: 8px;
      width: fit-content;
      align-self: left;
      width: 100px;
      text-align: center;
      color: #070333;
      text-decoration: none;
      border-radius: 3.5px;
    }
  }
`;
