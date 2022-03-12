import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: var(--snow);
    font-weight: 900;
    padding: 0;
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
