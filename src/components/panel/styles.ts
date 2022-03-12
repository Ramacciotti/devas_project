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
    margin-bottom: 1px;
    font-size: 30px;
    line-height: 1.5;
  }

  p {
    color: var(--snow);
    font-weight: 400;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    width: 100%;
    background-color: var(--snow);
    margin-top: 25px;
    border: none;
    border-top: 1px solid var(--snow);
  }

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
  margin-bottom: 10px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h2 {
    color: var(--snow);
    font-weight: 600;
    padding: 0;
    margin-bottom: 1px;
    font-size: 26px;
    line-height: 1;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  p {
    color: var(--snow);
    font-weight: 400;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
  }

  strong {
    color: var(--lightPink);
  }
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

  select {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    width: 100.3%;
    font-size: 16px;
    color: var(--mediumSnow);
    cursor: pointer;
    margin-bottom: 10px;
  }

  textarea {
    display: flex;
    border-radius: 5px;
    min-height: 140px;
    border: 1px solid lightgray;
    width: 98.5%;
    margin-bottom: 10px;
    color: var(--darkSnow);
    font-size: 16px;
    ::placeholder {
      color: var(--mediumSnow);
      font-size: 16px;
    }
  }

  span {
    display: flex;
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;

    img {
      height: 100px;
      margin: 16px 20px 0px 0;
    }
  }
`;
