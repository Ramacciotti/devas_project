import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 93%;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  height: auto;

  h2 {
    color: var(--snow);
    font-weight: 700;
    padding: 0;
    margin-top: 20px;
    font-size: 28px;
    line-height: 1.5;
  }

  span {
    display: flex;
    justify-content: center;
    width: 100%;
    p {
      color: var(--snow);
      font-weight: 500;
      padding: 0;
      margin-top: 20px;
      margin-left: 10px;
      margin-bottom: 40px;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  form {
    display: flex;
    width: 100%;

    div {
      display: flex;
    }
  }

  textarea {
    padding: 10px;
    border-radius: 5px;
    border-style: none;
    width: 100%;
    margin: 0 0 1rem 0;
  }

  button {
    padding: 10px;
    border-style: none;
    border-radius: 5px;
    width: 20rem;
    background-color: var(--darkBlue);
    color: white;
    cursor: pointer;
  }

  span {
    display: flex;
    width: 100%;
  }

  button {
    margin-top: 20px;
    background-color: var(--lightPurple);
    width: 200px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin: 0 10px;
    width: 100%;
    color: var(--snow);
    ::placeholder {
      color: var(--snow);
    }
  }

  select {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin: 0 10px;
    width: 100%;
    color: var(--snow);
  }

  textarea {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    min-height: 140px;
    border: 1px solid lightgray;
    margin: 0 10px;
    width: 100%;
    color: var(--snow);
    ::placeholder {
      color: var(--snow);
    }
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  justify-content: center;

  &:last-child() {
    background-color: red;
  }

  img {
    height: 200px;
    margin: 20px;
  }
`;
