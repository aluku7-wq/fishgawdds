import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 48px;
  padding-top: 20vh;
  color: #fff;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: yellow;
      padding: 8px;
      border-radius: 3.5px;
      cursor: pointer;
    }
  }
  .dashboard {
    display: flex;
    margin-top: 32px;
    gap: 24px;
    button {
      width: 88px;
      background: yellow;
      border: none;
      color: #02023a;
      outline: none;
      cursor: pointer;
      padding: 8px;
    }
  }
  .body {
    display: flex;
    .games {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 48px;
      .card {
        display: flex;
        align-items: center;
        background: #0000004c;
        padding: 24px;
        gap: 5vw;
        border-radius: 8px;
        .profile {
          img {
            width: 80px;
          }
          p:nth-child(3) {
            opacity: 0.5;
          }
        }
        a {
          background: yellow;
          text-decoration: none;
          color: #010125;
          padding: 4px;
        }
      }
    }
  }
  .purchases {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    .content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .card {
        display: flex;
        padding: 24px;
        background: #0000003d;
        width: 60vw;
        gap: 24px;
      }
    }
  }
`;
