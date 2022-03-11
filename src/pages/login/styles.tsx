import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  height: auto;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  height: auto;
  padding: 0 3rem;

  h2 {
    font-weight: 700;
    color: var(--darkBlue);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;    
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin: 0 0 1rem 0;
    width: 100%;
    ::placeholder {
      color: lightgray;
    }
  }

  textarea {
    padding: 10px;
    border-radius: 5px;
    border-style: none;
    width: 100%;
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
`;
