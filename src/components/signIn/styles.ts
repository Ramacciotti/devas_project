import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  border-radius: 5px;
  height: auto;

  h2 {
    color: var(--snow);
    font-weight: 900;
    padding: 0;
    margin-bottom: 40px;
    font-size: 30px;
    line-height: 1.5;
  }

  form {
    display: flex;
    width: 100%;
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    align-self: center;
    margin-top: 20px;
    padding: 10px;
    border-style: none;
    border-radius: 5px;
    width: 20rem;
    background-color: var(--lightPink);
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Fields = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin: 0 0 10px 0;
    width: 98.5%;
    color: var(--darkSnow);
    font-size: 16px;
    ::placeholder {
      color: var(--mediumSnow);
      font-size: 16px;
    }
  }
`;
