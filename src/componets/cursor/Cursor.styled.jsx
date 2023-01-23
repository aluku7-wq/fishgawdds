import styled from "styled-components";

export const Container = styled.div`
  .large_circle,
  .small_circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #ffbc2be1;
    position: fixed;
    pointer-events: none;
    transition: transform 0.1s;
    z-index: 5;
  }
  .small_circle {
    width: 16px;
    height: 16px;
    background-color: rgb(109, 37, 224);
  }
`;
