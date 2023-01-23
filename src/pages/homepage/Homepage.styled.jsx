import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  .side {
    flex-basis: 30%;
    padding-top: 200px;
    padding-left: 96px;
    padding-top: 20vh;
    h4 {
      color: #fff;
    }
    .grid {
      position: fixed;
      width: 20vw;
      padding-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      .card {
        height: 7vw;
        border-radius: 3.5px;
        width: 20vw;
        color: #fff;
        .card_overlay {
          background: linear-gradient(45deg, #40059ec3, #f002a044);
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 800;
          height: 100%;
        }
      }
    }
  }
  .hero {
    flex-basis: 70%;
    min-height: 100vh;
    .hero_overlay {
      background: linear-gradient(to right, rgb(12, 26, 46), #4605af76);
      height: 100%;
      text-align: right;
      padding: 48px;
      padding-top: 40vh;
      padding-right: 10vw;

      h1 {
        text-transform: capitalize;
        font-size: 64px;
        color: #ffbc2b;
        line-height: 64px;
        span {
          color: #fff;
        }
      }
      h3 {
        color: #fff;
        text-transform: capitalize;
        margin-top: 24px;
        span {
          color: #ffbc2b;
        }
      }
      .buttons {
        display: flex;
        gap: 24px;
        justify-content: end;
        padding-top: 24px;
        button {
          background-color: #ffbc2b;
          color: #fff;
          border: 2px solid #ffbc2b;
          width: 120px;
          padding: 8px 0;
          font-size: 18px;
          border-radius: 7px;
        }
        .purchase {
          background-color: transparent;
          color: #ffbc2b;
        }
      }
    }
  }
`;
