import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--midwayGreen);
  border-radius: 5px;
  height: auto;

  form {
    width: 100%;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border-style: none;
    margin-right: 5px;
  }

  textarea {
    padding: 10px;
    border-radius: 5px;
    border-style: none;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  height: auto;
  background-color: blue;

  * {
    flex: 1;
    margin: 0 5px;
  }
`;
