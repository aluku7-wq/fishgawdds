import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #041529ea;
  align-self: center;
  border-radius: 7px;
  align-items: center;
  justify-content: center;

  .large_circle,
  .small_circle {
    position: fixed;
    background: linear-gradient(to right, purple, yellow) yellow;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-self: center;
  }
  .small_circle {
    width: 60px;
    height: 60px;
  }
  .message {
    display: flex;
    color: red;
    gap: 32px;
    align-items: center;
    h2 {
      max-width: 400px;
    }
  }
`;
