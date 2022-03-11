import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
`;

export const Content = styled.section`
  display: flex;
  width: 1200px;
  justify-content: center;

  h6 {
    color: var(--lightSnow);
    font-size: 16px;
    font-weight: 400;

    a {
      text-decoration: none;
      color: var(--lightPink);
    }
  }
`;
