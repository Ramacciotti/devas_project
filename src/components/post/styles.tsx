import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: sans-serif;
`;

export const Content = styled.section`
  display: flex;
  width: 1120px;
  background-color: var(--mediumPurple);
  border-radius: 10px;
  padding: 40px;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 249px;
    width: 249px;
    border-radius: 100%;
  }
`;

export const Information = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  display: flex;

  h2 {
    font-size: 26px;
    color: var(--lightSnow);
    margin: 0 0 16px 0;
    padding: 0;
    font-weight: 600;
  }
`;

export const SocialIcons = styled.div`
  display: flex;

  img {
    height: 30px;
    width: 30px;
    margin-left: 15px;
  }
`;

export const MinorInfo = styled.div`
  display: flex;
  gap: 10px;
  color: var(--lightSnow);
`;

export const City = styled.div`
  display: flex;
  align-items: center;
  color: var(--snow);

  span {
    font-weight: bold;
    margin-right: 10px;
    font-size: 16px;
  }

  h3 {
    font-weight: 400;
    margin: 0;
    font-size: 16px;
  }
`;

export const Age = styled.div`
  display: flex;
  align-items: center;
  color: var(--snow);
  font-size: 14px;

  span {
    font-weight: bold;
    margin-right: 10px;
    font-size: 15px;
  }

  h3 {
    font-weight: 100;
    margin: 0;
    font-size: 15px;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  color: var(--snow);

  span {
    font-weight: bold;
    margin-right: 10px;
    font-size: 15px;
  }

  h3 {
    font-weight: 100;
    margin: 0;
    font-size: 15px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex: 1;

  p {
    color: var(--lightSnow);
    line-height: 1.3;
    text-align: justify;
  }
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 5px;

  h4 {
    font-size: 14px;
    color: var(--lightSnow);
    margin: 0;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 500;
    background-color: var(--lightPurple);
  }

  div {
    margin-right: 13px;
  }
`;

export const Objective = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;

  h4 {
    background-color: var(--lightGreen);
  }
`;

export const Position = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;

  h4 {
    background-color: var(--lightBlue);
  }
`;

export const Preference = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;

  h4 {
    background-color: var(--lightYellow);
  }
`;

export const Level = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;

  h4 {
    background-color: var(--lightPurple);
  }
`;

export const Languages = styled.div`
  display: flex;
  flex: 1;
  margin-top: 13px;

  h4 {
    font-size: 14px;
    color: var(--lightSnow);
    margin: 0;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 500;
    background-color: var(--lightPink);
    margin-right: 15px;
  }
`;
