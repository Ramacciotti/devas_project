import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 0;
`;

export const Content = styled.section`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;

  span {
    flex: 1;
    display: flex;
  }

  span:nth-child(1) {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--lightSnow);
      font-weight: bold;
      padding: 0;
      margin: 0;
      font-size: 40px;
    }

    h4 {
      color: var(--snow);
      font-weight: 400;
      padding: 0;
      margin-top: 20px;
      font-size: 18px;
      line-height: 1.5;
      width: 500px;
    }

    button {
      background-color: var(--lightPink);
      border: none;
      border-radius: 5px;
      color: white;
      width: 200px;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
    }
  }

  span:nth-child(2) {
    display: flex;
    justify-content: right;
    img {
      width: 520px;
    }
  }
`;
