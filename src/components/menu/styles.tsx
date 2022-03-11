import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 2;

  nav {
    display: flex;
    width: 100%;
  }

  nav ol {
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-weight: 700;

    button:nth-child(1) {
      background-color: transparent;
      font-weight: 500;
      border: 1px solid var(--lightSnow);
      border-radius: 5px;
      color: var(--lightSnow);
      width: 100px;
      height: 40px;
      cursor: pointer;
      :hover {
        background-color: var(--lightSnow);
        a {
          color: var(--darkPurple);
        }
      }
    }

    button:nth-child(2) {
      background-color: var(--lightPurple);
      border: none;
      border-radius: 5px;
      color: white;
      width: 100px;
      height: 40px;
      cursor: pointer;
      margin-left: 30px;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 700;
    }

    a {
      font-size: 14px;
      text-decoration: none;
      color: var(--lightSnow);
    }
  }
`;
