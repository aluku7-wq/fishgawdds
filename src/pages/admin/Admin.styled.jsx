import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 48px;
  padding-top: 20vh;
  flex-direction: column;
  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffffcc;
    .form {
      background-color: #041631;
      display: flex;
      width: 60vw;
      flex-direction: column;
      align-items: center;
      padding: 48px;
      gap: 24px;
      max-width: 500px;
      border-radius: 8px;
      text-align: right;
      .icon {
        color: #fff;
        width: 100%;
        float: right;
        justify-content: right;
        font-size: 24px;
        padding: 0 24px;
        .btn {
          cursor: pointer;
        }
      }
      input,
      button {
        padding: 8px 24px;
        width: 90%;
        justify-content: center;
        border: none;
        outline: none;
        background: #ffffff39;
        color: #fff;
        border-radius: 8px;
      }
      button {
        background: yellow;
        color: #01011b;
      }
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      background-color: yellow;
      border: none;
      padding: 2px 8px;
      outline: none;
    }
    .search {
      display: flex;
      gap: 48px;
      input {
        background: #ffff0058;
        border: none;
        padding: 2px 8px;
        border-radius: 3.5px;
        outline: none;
        color: #fff;
        font-size: 18px;
      }
      input::placeholder {
        color: #ffffff65;
      }
      button {
        background-color: yellow;
        border: none;
        padding: 2px 8px;
        outline: none;
      }
    }
  }
  .games {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 48px;
    .card {
      background: #ffffff2b;
      border-radius: 8px;
      padding: 24px;
      color: #fff;
      width: 50%;
      button {
        background-color: yellow;
        border: none;
        padding: 2px 8px;
        outline: none;
        margin-top: 24px;
        width: 50px;
        cursor: pointer;
      }
    }
  }
`;
