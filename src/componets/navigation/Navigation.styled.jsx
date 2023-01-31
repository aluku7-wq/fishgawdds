import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  width: 100vw;
  .logo {
    display: flex;
    align-items: center;
    gap: 24px;
    img {
      height: 70px;
    }
    .logotext {
      display: flex;
      flex-direction: column;
      h3 {
        color: #fff;
        font-weight: 700;
        font-size: 32px;
        /* letter-spacing: 8px; */
        span {
          font-weight: 100;
        }
      }
      p {
        color: #fff;
        opacity: 0.4;
      }
    }
  }
  .links {
    display: flex;
    gap: 40px;
    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 24px;
    }
    .active {
      color: #ffbc2b;
    }
  }
`;
