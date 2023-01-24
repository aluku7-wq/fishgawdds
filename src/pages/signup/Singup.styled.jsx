import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25vh;
  .overlay {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 500px;
    background: linear-gradient(45deg, #4d008081, #ff009d57);
    justify-content: space-around;
    align-items: center;
    min-height: 400px;
    border-radius: 3.5px;
    color: #fff;
    padding: 24px 0;

    input {
      background: transparent;
      border: none;
      outline: none;
      width: 80%;
      background-color: #00000022;
      padding-top: 8px;
      padding-left: 8px;
      padding-bottom: 4px;
      font-size: 18px;
      color: #fff;
    }
    .submit {
      background-color: #ffbc2b;
      padding: 8px 0;
      border-radius: 3.5px;
      color: rgb(12, 26, 46);
    }
    a {
      color: #ffbc2b;
    }
  }
`;
